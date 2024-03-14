import React, { useEffect, useState } from 'react'
import 'react-circular-progressbar/dist/styles.css';
import { CircularProgressbar } from 'react-circular-progressbar';
// import {Colors} from ('tailwindcss/colors')


const HomeMid = () => {

  const progressBars = [
    { maxPercentage: 80, title: 'DENTAL TREATMENT' },
    { maxPercentage: 90, title: 'FREE SERVICE' },
    { maxPercentage: 75, title: 'HELP OTHERS' },
    { maxPercentage: 85, title: 'SANATAN SANDESH' },
    // Add more objects for additional progress bars
  ];
  
// 14 years in seconds

  return (
    <div>
            <div className="container  h-fit bg-[#F8F9FA] flex flex-col items-center mx-auto p-4">
      {/* Text Editor Widget 1 */}
     
      
      <div className="mb-4 ">
        <p className="text-2xl sm:text-4xl text-seconddary text-center font-bold">
          Mission Muskan Dwarikamai by Dasganu Welfare Foundation
        </p>
        <p className="mt-1 text-base text-colors.myfirst text-center">
          Dental hospital is being run in Barabanki through which dental treatment is being provided almost free of cost.
        </p>
      </div>
      <div className="mb-4 text-seconddary">
        <p className="text-lg text-center font-bold">
          आप सभी लोगो को जय श्री राम शिरडी साई बाबा के आदेश से अब से इस पेज का नाम सनातन संदेश होगा
        </p>
        <p className="mt-2">
          जैसे बाबा ने शिरडी में शिव मंदिर गणेश मंदिर लक्ष्मी मंदिर बनवाकर सनातन धर्म को बढ़ाने का संदेश दिया है अब से सनातन संदेश भी यही कार्य करेगा
        </p>
      </div>
      <div className="w-full flex items-center justify-around place-items-center">
     
      <div>
        <div className="div flex    sm:gap-20  pt-10">
        {/* <div className="div h-52 w-52 ">
        <img src="../../public/images/image1.jpeg"  className='h-full w-full bg-transparent' alt="" />
      </div>
        <div className="div h-40 w-40 ">
        <img src="../../images/image2.jpeg"  className='h-full w-full ' alt="" />
      </div>
        <div className="div h-40 w-40 ">
        <img src="../../images/100-SAFE-DELIVERY-.png.webp"  className='h-full w-full ' alt="" />
      </div>
          <div className="div h-40 w-40 ">
          <img src="../../images/TOP-NOTCH-QUALITY.png.webp"  className='h-full w-full ' alt="" />
        </div>
          <div className="div h-40 w-40 ">
          <img src="../..//images/TRUSTED-BY-CONSUMERS.png.webp"  className='h-full w-full ' alt="" />
        </div> */}
        {progressBars.map((bar, index) => (
        <ProgressBar key={index}  maxPercentage={bar.maxPercentage} title={bar.title} />
      ))}
        </div>
    </div>

			</div>
      {/* Text Editor Widget 2 */}

      {/* Progress Widget 1 */}
     
    </div>



    </div>
  )
}

const ProgressBar = ({ maxPercentage , title}) => {
  const [customerCountdown, setCustomerCountdown] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCustomerCountdown((prevCountdown) => Math.min(prevCountdown + 5, maxPercentage));
    }, 100);

    return () => clearInterval(interval);
  }, [maxPercentage]);

  const calculatePercentage = (value) => (value / maxPercentage) * maxPercentage;

  return (
    <div className="p-4 text-center flex items-center flex-col">
      <CircularProgressbar
      className=' rounded-md sm:h-20 sm:w-32'
        value={calculatePercentage(customerCountdown)}
        text={customerCountdown.toString()}
        styles={{
          path: {
            stroke: '#001B38',
          },
          trail: {
            stroke: '#f2f2f2',
          },
          text: {
          
            fill: '#001B38',
            fontSize: '24px',
            fontWeight: 'bold',
        
          },
        }}
      />
      <p className="text-[10px] text-seconddary sm:text-lg text-center  w-[11vw]  mt-2">{title}</p>
    </div>
  );
};
export default HomeMid