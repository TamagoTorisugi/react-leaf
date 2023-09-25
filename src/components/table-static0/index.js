import React, { useState, useEffect } from "react";
import fetch from "node-fetch";
//import { spl11, spl12 } from "../../shared/Spl.js"


function TableStatic0() {

  const [data1, setData1] = useState(0);
  const [data2, setData2] = useState(0);

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
  }, []);

  return (
    <table class="w-full text-sm dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="text-center py-2">
                  Comments
                </th>
                <th scope="col" class="text-center py-2">
                  Tickets
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="bg-white">
                <td class="text-center text-lg font-bold">
                    {data1}
                </td>
                <td class="text-center text-lg font-bold">
                    {data2}
                </td>
            </tr>
        </tbody>
    </table>
  );
};

export default TableStatic0;
