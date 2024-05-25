export async function fetchCityData(name: string) {
  const url = `https://api.api-ninjas.com/v1/city?name=${name}`;

  try {
    const res = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "X-Api-Key": "gwmblKrp4qJF9HFhnHnTNg==XppbDMsxwp2TzzQ0", // Replace with your actual API key
      },
    });

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const data = await res.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error("Error fetching city data:", error);
  }
}
