import React, {FC, useCallback, useEffect} from 'react'
import {useTranslation} from 'react-i18next';
import {useTimer} from 'react-timer-hook';
import styles from '../modals.module.scss'
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../store/store";
import {setDate, setTimer} from "../../../store/reducers/feedbackTimerReducer";

interface Props {
  limitsSend?: boolean
  setLimitsSend?: (val: boolean) => void
}

export const TimerFeedback: FC<Props> = props => {
  const {limitsSend, setLimitsSend} = props
  const {t} = useTranslation('translation', {keyPrefix: 'modals.feedback'});

  function TimerFeedbackTime({expiryTimestamp}: { expiryTimestamp: Date }) {
    const dispatch = useDispatch()

    const {
      seconds,
      minutes
    } = useTimer({
      expiryTimestamp,
      onExpire: () => {
        setLimitsSend && setLimitsSend(false)
        dispatch(setDate(null))
      }
    });

    const dispatchCallback = useCallback(() => dispatch(setTimer({seconds, minutes})), [dispatch, seconds, minutes])

    useEffect(() => {
      dispatchCallback()
    }, [seconds, minutes])

    function setMinutesDeclination(n: number, text_forms: string[]) {
      n = Math.abs(n) % 100;
      let n1 = n % 10;
      if (n > 10 && n < 20) {
        return text_forms[2];
      }
      if (n1 > 1 && n1 < 5) {
        return text_forms[1];
      }
      if (n1 == 1) {
        return text_forms[0];
      }
      return text_forms[2];
    }

    function setSecondsDeclination(number: number, titles: string[]) {
      let cases = [2, 0, 1, 1, 1, 2];
      return titles[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];
    }

    const timer = useSelector((state: RootState) => state.timer.time)


    // dispatch(setTimer({seconds, minutes}))

    return (
      <div>
        <div className={styles.form__sendText}>
          {t('send-text')}&nbsp;
          {minutes > 0 &&
            <span>{timer.minutes} {setMinutesDeclination(timer.minutes, [t('minute'), t('minutes'), t('minute_e')])} </span>}
          {seconds > 0 &&
            <span>{timer.seconds} {setSecondsDeclination(timer.seconds, [t('second'), t('seconds'), t('seconds_e')])}.</span>}
        </div>
      </div>
    );
  }

  let time = new Date();

  const setDefaultTime = () => {
    time.setSeconds(time.getSeconds() + 180); // 3 minutes timer
  }

  setDefaultTime()

  const timerDate = useSelector((state: RootState) => state.timer.initDate)

  const dispatch = useDispatch();

  useEffect(() => {
    if (timerDate === null || timerDate === undefined && limitsSend) {
      time = new Date()
      setDefaultTime()
      dispatch(setDate(time))
    }
    // console.log(timerDate)
  }, [limitsSend, useDispatch])

  return (
    <div>
      {limitsSend && (
        <TimerFeedbackTime expiryTimestamp={timerDate ? timerDate : time}/>
      )}
    </div>
  );
}