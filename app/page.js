import Image from 'next/image'
import Header from '@/components/header/Header'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
    <Header />
    <div className='homePage'>
    <div className=' h-fit w-full bg-gradient-to-r from-indigo-100 to-sky-300
     md:px-16 pb-10'>
        <div className='pt-6 md:flex items-center justify-between'>
            <div className='ml-10 font-bold mb-1'>
              <p className='text-4xl leading-[3rem]'>Learn & become <br/>
              <span className='text-fuchsia-600'>
               Top 1% 
               software <br/>
               developer
               </span> 

              </p>
              <button class="bg-indigo-500 shadow-lg shadow-indigo-500/50 rounded-md px-3 py-1 text-white mt-3">Explore new batches  ➡</button>
            </div>
            <div className='p-3 flex justify-center'>
                <Image
              src="/smiling-students.avif"
              alt="post image"
              className="rounded-lg w-11/12 md:w-[400px]"
              width={500}
              height={500}
              priority
              style={{
                width: '100%',
                height: 'auto',
              }}
            />
            </div>
        </div>
        <div className='pt-6 md:flex items-center justify-between mt-5'>
            <div className='ml-10 font-bold mb-1'>
              <p className='text-4xl leading-[3rem]'>Learn & become <br/>
              <span className='text-fuchsia-600'>
               Top 1% 
               software <br/>
               developer
               </span> 

              </p>
              <button class="bg-indigo-500 shadow-lg shadow-indigo-500/50 rounded-md px-3 py-1 text-white mt-3">Explore new batches  ➡</button>
            </div>
            <div className='p-3 flex justify-center'>
            <Image
                src="/smiling-students.avif"
                alt="post image"
              className="rounded-lg w-11/12 md:w-[400px]"
              width={500}
              height={500}
              priority
              style={{
                width: '100%',
                height: 'auto',
              }}
            />
            </div>
        </div>
        <div className='pt-6 md:flex items-center justify-between mt-5'>
            <div className='ml-10 font-bold mb-1'>
              <p className='text-4xl leading-[3rem]'>Learn & become <br/>
              <span className='text-fuchsia-600'>
               Top 1% 
               software <br/>
               developer
               </span> 

              </p>
              <button class="bg-indigo-500 shadow-lg shadow-indigo-500/50 rounded-md px-3 py-1 text-white mt-3">Explore new batches  ➡</button>
            </div>
            <div className='p-3 flex justify-center'>
            <Image
                src="/smiling-students.avif"
                alt="post image"
              className="rounded-lg w-11/12 md:w-[400px]"
              width={500}
              height={500}
              priority
              style={{
                width: '100%',
                height: 'auto',
              }}
            />
            </div>
        </div>

        {/* news box */}
        <div className='w-full flex justify-center relative mt-10 '>
                <span className='font-bold bg-yellow-400 py-1 px-3 rounded-xl absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 text-blue-800'>News</span>
            <div className='w-[91%] h-60 border-2 border-yellow-400 rounded-lg p-1 overflow-auto md:w-1/2'>
                <ul className='space-y-3 text-gray-700 mt-3'>
                    <li className='flex'><span className=' mr-2'>➡</span> <span className='text-orange-700'> दिवाली की छुट्टियां 2023: कितने दिन बंद रहेंगे स्कूल और कॉलेज, देखें राज्यवार लिस्ट ...</span> </li>
                    <li><span className=' mr-2'>➡</span> <span className='text-orange-700'> दिवाली की छुट्टियां 2023: कितने दिन बंद रहेंगे स्कूल और कॉलेज...</span> </li>
                    <li><span className=' mr-2'>➡</span> <span className='text-orange-700'> दिवाली की छुट्टियां 2023: कितने दिन बंद रहेंगे ...</span> </li>
                    <li><span className=' mr-2'>➡</span> <span className='text-orange-700'> बिखरी हुई कुर्सियां-आग ही आग, कोच्चि में  ...</span> </li>
                    
                   
                </ul>
            </div>
        </div>
   
   <Footer />

    </div>
   </div>
   </>
  )
}
