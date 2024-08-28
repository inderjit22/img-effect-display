import './App.css'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import mouse from '../src/img/mouse.png'

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);


function App() {

  useGSAP(() => {
    const T1 = gsap.timeline({
      scrollTrigger: {
        trigger: '.mainCont',
        start: '50% 50%',
        end: '1800% 50%',
        pin: true,
        scrub: true,
        ease: "power2.out",
      }
    })

    T1.to('.contentBox', {
      maskSize: '600%'
    }, 'a')
    T1.to('.imgCont', {
      scale: 1,
    }, 'a')
    T1.to('.text1',{
      opacity:0
    },'a')

    T1.to('.contentBox2', {
      maskSize: '600%'
    }, 'b')
    T1.to('.imgCont2', {
      scale: 1,
    }, 'b')
    T1.to('.text2',{
      opacity:0
    },'b')

    T1.to('.contentBox3', {
      maskSize: '600%'
    }, 'c')
    T1.to('.imgCont3', {
      scale: 1,
    }, 'c')
    T1.to('.text3',{
      opacity:0
    },'c')

    T1.to('.contentBox4', {
      maskSize: '600%'
    }, 'd')
    T1.to('.imgCont4', {
      scale: 1,
    }, 'd')
    T1.to('.text4',{
      opacity:0
    },'d')

  }, [])

  return (
    <>
      <div className="mainCont">
        <div className="hint">
          <img className='ms' src={mouse} alt="" />
          <p>Scroll</p>
        </div>
        <div className="contentBox">
          <div className='imgCont'>
            <div className="Textdiv">
              <h1 className='text1'>Explore.</h1>
            </div>
            <div className="contentBox2">
              <div className='imgCont2'>
                <div className="Textdiv">
                  <h1 className='text2'>View.</h1>
                </div>
                <div className="contentBox3">
                  <div className='imgCont3'>
                    <div className="Textdiv">
                      <h1 className='text3'>Explore.</h1>
                    </div>
                    <div className="contentBox4">
                      <div className='imgCont4'>
                        <div className="Textdiv">
                          <h1 className='text4'>River.</h1>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
