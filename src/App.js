import './App.css';
import Heatmap from './components/heatmap';
import Bubble from './components/bubble'
import Clock from './components/clock'
import Linechart from './components/linechart';
import Table0 from './components/table0';
import Table1 from './components/table1';
import TableStatic0 from './components/table-static0';
import TableStatic1 from './components/table-static1';


function App() {
  return (
    <div>
      <header className='md:h-16 h-12 w-full bg-gradient-to-r from-blue-800 to-sky-300 flex flex-col justify-center fixed top-0 left-0 z-10'>
        <div className='flex justify-between items-center'>
          <div className='md:text-2xl text-lg font-bold text-white md:px-8 px-2 leading-1'>
            Operational health
          </div>
          <div className='flex md:mx-4 mx-2'>
            <button className='md:text-base text-sm border-2 rounded-lg bg-blue-900 text-white md:px-8 px-2 py-1 font-bold mx-1 hover:bg-blue-700 active:bg-blue-500'>Japan</button>
            <button className='md:text-base text-sm border-2 rounded-lg bg-green-500 text-white md:px-8 px-2 py-1 font-bold mx-1 hover:bg-green-400 active:bg-green-300'>World</button>
            <button className='md:text-base text-sm border-2 rounded-lg bg-orange-500 text-white md:px-8 px-2 py-1 font-bold mx-1 hover:bg-orange-400 active:bg-orange-300'>xx Pay</button>
          </div>
        </div>
      </header>
      <div id='Main' className='md:pt-16 pt-12'>

        {/* 1段目 */}
        <div className='bg-white 2xl:flex w-full'>
          <div className='2xl:w-[40%] w-full'>
            <div className='md:flex justify-center m-1 p-1'>
              <div className='flex justify-center'>
                <div className='flex flex-col items-center gap-1 pr-1'>
                  <button className='border-2 rounded-md bg-white text-gray-700 text-base hover:bg-gray-50 md:w-20 w-24'>Easy</button>
                  <button className='border-2 rounded-md bg-white text-gray-700 text-base hover:bg-gray-50 md:w-20 w-24'>Reset</button>
                </div>
                <div className='flex flex-col items-center gap-1 pr-1'>
                  <button className='border-2 rounded-md bg-white text-gray-700 text-base hover:bg-gray-50 md:w-20 w-24'>Translate</button>
                  <button className='border-2 rounded-md bg-white text-gray-700 text-base hover:bg-gray-50 md:w-20 w-24'>Reload</button>
                </div>
                <div className='flex flex-col items-center gap-1 pr-1'>
                  <button className='border-2 rounded-md bg-white text-gray-700 text-base hover:bg-gray-50 md:w-20 w-24'>Heatmap</button>
                  <button className='border-2 rounded-md bg-white text-gray-700 text-base hover:bg-gray-50 md:w-20 w-24'>Update</button>
                </div>
                <div className='flex flex-col items-center gap-1 pr-1'>
                  <button className='border-2 rounded-md bg-white text-gray-700 text-base hover:bg-gray-50 md:w-20 w-24'>Simple</button>
                  <button className='border-2 rounded-md bg-white text-gray-700 text-base hover:bg-gray-50 md:w-20 w-24'>Ticket</button>
                </div>
              </div>
              <div className='md:mt-0 mt-1 flex justify-center'>
                <div className='flex flex-col items-center gap-1 pr-1'>
                  <button className='border-2 rounded-md bg-white text-gray-700 text-base hover:bg-gray-50 md:w-24 w-32'>Normal</button>
                  <button className='border-2 rounded-md bg-white text-gray-700 text-base hover:bg-gray-50 md:w-24 w-32'>No mosaic</button>
                </div>
                <div className='flex flex-col items-center gap-1 pr-1'>
                  <button className='border-2 rounded-md bg-white text-gray-700 text-base hover:bg-gray-50 md:w-28 w-32'>Connection</button>
                  <button className='border-2 rounded-md bg-white text-gray-700 text-base hover:bg-gray-50 md:w-28 w-32'>Light mode</button>
                </div>
                <div className='flex flex-col items-center gap-1 pr-1'>
                  <button className='border-2 rounded-md bg-white text-gray-700 text-base hover:bg-gray-50 md:w-28 w-32'>Output</button>
                  <button className='border-2 rounded-md bg-white text-gray-700 text-base hover:bg-gray-50 md:w-28 w-32'>Dark mode</button>
                </div>
              </div>
            </div>
            <div className='md:h-160 h-128 m-1 p-1 border'>
              <Heatmap />
            </div>
          </div>
          <div className='2xl:w-[30%] w-full'>
            <div className='h-36 m-1 p-1 border'>
              <TableStatic1 />
            </div>
            <div className='h-8 rounded-lg bg-orange-600 border-orange-600 flex items-center justify-center m-1'>
              <p className='text-white text-center md:text-xl text-lg'>
                Caution! XYZ alerm shows different trend.
              </p>
            </div>
            <div className='h-18 m-1 p-1 border'>
              <TableStatic0 />
            </div>
            <div className='md:h-112 h-96 m-1 p-1 border'>
              <Linechart />
            </div>
          </div>
          <div className='2xl:w-[30%] w-full'>
            <div className='h-36 m-1 p-1 flex items-center justify-center'>
              <Clock />
            </div>
            <div className='h-8 rounded-lg bg-green-600 border-green-600 flex items-center justify-center m-1'>
              <p className='text-white text-center text-xl'>
                Nothing special
              </p>
            </div>
            <div className='m-1 p-1 border'>
              <div className='h-12 bg-gradient-to-r from-blue-800 to-sky-300 flex items-center justify-center'>
                <p className='text-white text-2xl text-bold'>
                  Customer
                </p>
              </div>
              <div>
                <Table0 />
              </div>
            </div>
            <div className='h-56 m-1 p-1 border w-auto'>
              <Bubble />
            </div>
          </div>
        </div>

        {/* 2段目 */}
        <div className='relative md:flex w-full'>
          <div className='md:w-1/5 w-full'>
            <div className='h-8 rounded-lg bg-green-600 border-green-600 flex items-center justify-center m-1'>
              <p className='text-white text-center text-xl'>
                Nothing special
              </p>
            </div>
            <div className='m-1 p-1 border'>
              <div className='h-12 bg-gradient-to-r from-blue-800 to-sky-300 flex items-center justify-center'>
                <p className='text-white text-2xl text-bold'>
                  Service integration
                </p>
              </div>
              <div>
                <Table1 />
              </div>
            </div>
          </div>
          <div className='md:w-1/5 w-full'>
            <div className='h-8 rounded-lg bg-green-600 border-green-600 flex items-center justify-center m-1'>
              <p className='text-white text-center text-xl'>
                Nothing special
              </p>
            </div>
            <div className='m-1 p-1 border'>
              <div className='h-12 bg-gradient-to-r from-blue-800 to-sky-300 flex items-center justify-center'>
                <p className='text-white text-2xl text-bold'>
                  Area
                </p>
              </div>
              <div>
                <Table1 />
              </div>
            </div>
          </div>
          <div className='md:w-1/5 w-full'>
            <div className='h-8 rounded-lg bg-green-600 border-green-600 flex items-center justify-center m-1'>
              <p className='text-white text-center text-xl'>
                Nothing special
              </p>
            </div>
            <div className='m-1 p-1 border'>
              <div className='h-12 bg-gradient-to-r from-blue-800 to-sky-300 flex items-center justify-center'>
                <p className='text-white text-2xl text-bold'>
                  Service
                </p>
              </div>
              <div>
                <Table1 />
              </div>
            </div>
          </div>
          <div className='md:w-1/5 w-full'>
            <div className='h-8 rounded-lg bg-green-600 border-green-600 flex items-center justify-center m-1'>
              <p className='text-white text-center text-xl'>
                Nothing special
              </p>
            </div>
            <div className='m-1 p-1 border'>
              <div className='h-12 bg-gradient-to-r from-blue-800 to-sky-300 flex items-center justify-center'>
                <p className='text-white text-2xl text-bold'>
                  Phenomenon
                </p>
              </div>
              <div>
                <Table1 />
              </div>
            </div>
          </div>
          <div className='md:w-1/5 w-full'>
            <div className='h-8 rounded-lg bg-green-600 border-green-600 flex items-center justify-center m-1'>
              <p className='text-white text-center text-xl'>
                Nothing special
              </p>
            </div>
            <div className='m-1 p-1 border'>
              <div className='h-12 bg-gradient-to-r from-blue-800 to-sky-300 flex items-center justify-center'>
                <p className='text-white text-2xl text-bold'>
                  Cause
                </p>
              </div>
              <div>
                <Table1 />
              </div>
            </div>
          </div>
        </div>

        {/* 3段目 */}
        <div className='h-72 bg-gradient-to-r from-violet-500 to-fuchsia-500'>
          表
        </div>

        {/* 4段目パネル */}
        <div className='h-32 bg-gradient-to-r from-cyan-500 to-blue-500'>
          パネル
        </div>
      </div>

    </div>

  );
}

export default App;
