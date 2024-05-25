// import React, { useState, useEffect } from "react";
import { fetchCityData } from "@/api/fetchCity";
import Image from "next/image";
import axios from "axios";
// import { useRouter } from "next/router";

export default async function Page({ params }: { params: any }) {
  const { id } = params;

  // Replace hyphens with spaces
  const searchParams = id.replace(/-/g, " ");
  fetchCityData(searchParams);

  const data = await fetchCityData(searchParams);

  console.log(params);
  console.log(data);

  return (
    <main>
      <div className="h-96 bg-pink-400"></div>
      <div className="gap-10  text-lg mt-3 px-16 py-4">
        <span className="gap-4 text-3xl font-bold">
          {/* <span className="px-2">City:</span> */}
          {data[0].name}
        </span>
        <p>{data[0].country}</p>
        <p>Population: {data[0].population}</p>
        {data[0].name}, a city that doesn’t sleep, as Frank Sinatra sang. The
        Big Apple is one of the largest cities in the United States and one of
        the most popular in the whole country and the world. Millions of
        tourists visit it every year attracted by its various iconic symbols and
        its wide range of leisure and cultural offer. New York is the birth
        place of new trends and developments in many fields such as art,
        gastronomy, technology,…
      </div>
    </main>
  );
}
