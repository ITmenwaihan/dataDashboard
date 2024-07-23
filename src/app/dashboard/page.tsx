
'use client'
import './index.css';
import StackedAreaChart from '@/compenents/cusEcharts/stackedAreaChart';
import BeijingAQI from "@/compenents/cusEcharts/beijingAQI";
import {useEffect, useRef, useState} from "react";

export default function Page() {
  const chartRef = useRef<HTMLDivElement | null>(null);
  const [userRatio, setUserRatio] = useState<number>(1);

  //先计算这个放大或者缩小的比例
  //当前的设计稿尺寸为 1920*960  当屏幕的宽/高 小于 设计稿的 宽/高  使用 屏幕宽/设计稿的宽，大于 使用 屏幕的高/设计稿的高
  const getScale = (w = 1920, h = 960) => {
    const s = window.innerWidth/window.innerHeight < w/h ? window.innerWidth/w : window.innerHeight/h;
    return s
  };

  const debounce = (fn: Function,delay: number) => {
    let timer: number;
    return function () {
      clearTimeout(timer);
      timer = setTimeout(fn,delay) as number
    }
  }

  useEffect(() => {
    const resizeObserver = new ResizeObserver(debounce(() => {
      const tmpS = getScale();
      setUserRatio(tmpS)

    },500));
    if (chartRef.current !== null) {
      resizeObserver.observe(chartRef.current as HTMLDivElement)
    }
    return () => {
      if (chartRef.current !== null) {
        resizeObserver.unobserve(chartRef.current as HTMLDivElement) ;
      }
      resizeObserver.disconnect()
    }

  }, [])




  return (
    <div className={'container'}>
      <div ref={chartRef} className={'chartArea'}>
        <StackedAreaChart ratio={userRatio}/>
        <BeijingAQI ratio={userRatio}/>
      </div>
    </div>
  )
}
