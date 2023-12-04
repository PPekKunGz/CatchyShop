import axios from 'axios';
 
export async function POST(request) {
  try {
    const res = await request.json()
    const response = await axios({
      method: "GET",
      url: `https://discord.com/api/v10/users/${res.item}`,
      headers: {
        Authorization: `Bot ${process.env.TOKEN}`
      },
    });
    return Response.json(response.data, {
      status: response.status
    })
  } catch (error) {
    return Response.json({ error: "Internal Server Error" }, {
      status: 500
    })
  }
}