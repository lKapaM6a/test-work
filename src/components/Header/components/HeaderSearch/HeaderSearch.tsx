import React, {FC, useCallback, useEffect, useState, useRef} from 'react'
import {useTranslation} from "react-i18next";
import {Button, Form, Input, Spin} from "antd";
import {LoadingOutlined} from '@ant-design/icons';
import {ReactComponent as Search} from './icons/search.svg'
import {ReactComponent as Microphone} from './icons/mic.svg'
import {ReactComponent as Close} from './icons/close.svg'
import {SearchHistory} from "./components/SearchHistory/SearchHistory";
import {SearchNoResult} from "./components/SearchNoResult/SearchNoResult";
import {SearchResults} from "./components/SearchResults/SearchResults";
import styles from './headerSearch.module.scss'

interface Props {
  positionHeader?: any
}

export const HeaderSearch: FC<Props> = props => {
  const {positionHeader} = props

  const {t} = useTranslation('translation', {keyPrefix: 'search'});

  const [search, setSearch] = useState(false);
  const [history, setHistory] = useState(false);
  const [noResults, setNoResults] = useState(false);
  const [resultsSearch, setResultsSearch] = useState(false);
  const [loading, setLoading] = useState(false);

  const [inputValue, setInputValue] = useState('')
  const searchRef = useRef();

  const loadingIcon = <LoadingOutlined style={{fontSize: 24}} spin/>;

  const [isMobile, setIsMobile] = useState(false)
  const mobileView = 1220
  const body = document.body

  const mobileDetect = useCallback(() => {
    if (window.innerWidth < mobileView && !isMobile) {
      setIsMobile(true)
      return
    }
    if (window.innerWidth >= mobileView && isMobile) {
      setIsMobile(false)
    }
  }, [isMobile])

  useEffect(() => {
    window.addEventListener('resize', mobileDetect)
    mobileDetect()
    return () => {
      window.removeEventListener('resize', mobileDetect)
    }
  })

  useEffect(() => {
    if (isMobile && search) {
      body.classList.add('no-scroll')
    } else {
      body.classList.remove('no-scroll')
    }
  }, [isMobile, search])


  //TODO: states for layout only
  const onChange = useCallback(() => {
    if (inputValue.length > 4) {
      setLoading(true)
      setTimeout(() => {
        setLoading(false)
        setResultsSearch(false)
        setHistory(false)
        setNoResults(true)
      }, 1000)
    } else if (inputValue.length) {
      setLoading(true)

      setTimeout(() => {
        setLoading(false)
        setNoResults(false)
        setHistory(false)
        setResultsSearch(true)
      }, 1000)
    } else {
      setLoading(true)

      setTimeout(() => {
        setLoading(false)
        setNoResults(false)
        setResultsSearch(false)
        setHistory(true)
      }, 1000)
    }
  }, [searchRef, inputValue, search])

  useEffect(() => {
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);

    function handleClick(e: any) {
      if (searchRef && searchRef.current) {
        const ref: any = searchRef.current
        if (!ref.contains(e.target)) {
          setSearch(false)
        } else {
          setSearch(true)

          //TODO: states for layout only
          if (!search) {
            setLoading(true)

            setTimeout(() => {
              setLoading(false)
              setNoResults(false)
              setResultsSearch(false)
              setHistory(true)
            }, 1000)
          }
        }
      }
    }
  }, [searchRef, inputValue, search]);

  const closeSearch = useCallback(() => {
    setSearch(false)
  }, [searchRef])

  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  return (
    <div ref={searchRef as any}
         className={styles.search}>
      <div className={styles.search__searchWrapper}>
        <div className={styles.search__inputWrapper}>
          <Form name="search"
                onFinish={onFinish}
                className={styles.search__form}>
            <div className={styles.search__inputMain}>
              <div className={styles.search__searchIcon}>
                <Search/>
              </div>

              <Form.Item name="search-input"
                         noStyle
                         rules={[{
                           required: true,
                           min: 1
                         }]}
              >
                <Input className={`ant-input ant-input--search ${styles.search__input}`}
                       placeholder={t('placeholder')}
                       onChange={(e) => {
                         setInputValue(e.target.value)
                         onChange()
                       }}
                />
              </Form.Item>

              <div className={`${styles.search__mic}`}>
                <Microphone/>
              </div>
            </div>

            <Button type='primary' htmlType="submit"
                    className={`${styles.search__button} ant-btn--search`}>
              {t('search-button')}
            </Button>
          </Form>

          {search && (
            <div className={styles.searchResult}
                 style={{
                   top: positionHeader + 'px',
                   maxHeight: `calc(100vh - ${positionHeader}px)`
                 }}>
              <div className={styles.searchResult__wrapper}>
                <div className={styles.searchResult__close}
                     onClick={() => closeSearch()}>
                  <Close/>
                </div>

                {/*Loading*/}
                {loading && (
                  <div className={styles.searchResult__loading}>
                    <Spin indicator={loadingIcon}/>
                  </div>
                )}

                {/*SEARCH HISTORY*/}
                {history && !loading && (
                  <SearchHistory/>
                )}

                {/*SEARCH RESULTS*/}
                {resultsSearch && !loading && (
                  <SearchResults/>
                )}

                {/*SEARCH NO RESULTS*/}
                {noResults && !loading && (
                  <SearchNoResult/>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}