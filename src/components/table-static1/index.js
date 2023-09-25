import React, { useState, useEffect } from "react";
import fetch from "node-fetch";
//import { spl1, spl2, spl3, spl4, spl5, spl6, spl7, spl8, spl9, spl10 } from "../../shared/Spl.js"


function TableStatic1() {

  const [data1, setData1] = useState(0);
  const [data2, setData2] = useState(0);
  const [data3, setData3] = useState(0);
  const [data4, setData4] = useState(0);
  const [data5, setData5] = useState(0);
  const [data6, setData6] = useState(0);
  const [data7, setData7] = useState(0);
  const [data8, setData8] = useState(0);
  const [data9, setData9] = useState(0);
  const [data10, setData10] = useState(0);

  function searchAndSet(spl, setFunc){
    fetch("https://SPLUNK_HOST:8089/services/search/jobs/export", {
      headers: {
        "Authorization": "Basic " + btoa("USER:PASSWORD"),
        "Content-Type": "application/x-www-form-urlencoded",
      },
      method: "POST",
      body: encodeURI('search='+spl+'&earliest_time=-30m&output_mode=csv'),
      })
    .then((response) => response.body.getReader())
    .then((reader) => {
       const decoder = new TextDecoder();
       let text = "";
       function readChunk({done, value}){
         if(done){
            setFunc(text.split('\n')[1]);
            return;
         }
         text += decoder.decode(value);
         reader.read().then(readChunk);
       }
       reader.read().then(readChunk);
    });
  };

  useEffect(() => {
//    searchAndSet(spl1, setData1);
//    searchAndSet(spl2, setData2);
//    searchAndSet(spl3, setData3);
//    searchAndSet(spl4, setData4);
//    searchAndSet(spl5, setData5);
//    searchAndSet(spl6, setData6);
//    searchAndSet(spl7, setData7);
//    searchAndSet(spl8, setData8);
//    searchAndSet(spl9, setData9);
//    searchAndSet(spl10, setData10);
  }, []);

  return (
    <table class="w-full text-sm dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="text-center py-2">
                </th>
                <th scope="col" class="text-center py-2">
                    Recoverd
                </th>
                <th scope="col" class="text-center py-2">
                    Continue
                </th>
                <th scope="col" class="text-center py-2">
                    Repercussion
                </th>
                <th scope="col" class="text-center py-2">
                    Type 1
                </th>
                <th scope="col" class="text-center py-2">
                    Type 2
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="py-4 font-medium text-center text-gray-900 whitespace-nowrap dark:text-white">
                    Company
                </th>
                <td class="text-center text-lg font-bold">
                    {data1}
                </td>
                <td class="text-center text-lg font-bold">
                    {data2}
                </td>
                <td class="text-center text-lg font-bold">
                    {data3}
                </td>
                <td class="text-center text-lg font-bold">
                    {data4}
                </td>
                <td class="text-center text-lg font-bold">
                    {data5}
                </td>
            </tr>
            <tr class="bg-white dark:bg-gray-800">
                <th scope="row" class="py-4 font-medium text-center text-gray-900 whitespace-nowrap dark:text-white">
                    Connection
                </th>
                <td class="text-center text-lg font-bold">
                    {data6}
                </td>
                <td class="text-center text-lg font-bold">
                    {data7}
                </td>
                <td class="text-center text-lg font-bold">
                    {data8}
                </td>
                <td class="text-center text-lg font-bold">
                    {data9}
                </td>
                <td class="text-center text-lg font-bold">
                    {data10}
                </td>
            </tr>
        </tbody>
    </table>
  );
};

export default TableStatic1;
