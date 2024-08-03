import Link from "next/link"

export default async function Page () {
  const data = await getData()
  console.log(data)
  return (
    <div>
      {
        data.map(item => {
          return <div><Link href={'/photo/' + item.id}>{item.txt}</Link></div>
        })
      }
    </div>
  )
}

async function getData () {
  const res = await fetch('http://localhost:3000/data.json')
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}
