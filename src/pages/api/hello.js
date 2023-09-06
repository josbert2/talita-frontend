// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  const URL = 'https://talita-backend-dev-dev.up.railway.app/api/employees'
  fetch(URL)
    .then((response) => response.json())
    .then((data) => {
      res.status(200).json(data)
    }
  )



}
