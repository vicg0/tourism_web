let accessToken = ''
export async function getTravels() {

  try {
    await postAuthentication()

    const res = await fetch('https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=GRU&destinationLocationCode=BKK&departureDate=2024-12-20&adults=1', {
      headers: {
        'Authorization': `Bearer ${accessToken}`,
      }
    })


    const data = await res.json()


    return data

  } catch (e) {
    console.log(e)
  }
}

async function postAuthentication() {
  const res = await fetch('https://test.api.amadeus.com/v1/security/oauth2/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: "grant_type=client_credentials&client_id=ZC8Gz8DS78p3gGhfEwPTeRcGFTfElhVY&client_secret=zGMgLJHeTFa5rgks"
  })

  const data = await res.json()
  accessToken = data.access_token
}