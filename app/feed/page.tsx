import Link from "next/link"

export default function Page () {
  return (
    <div>
      {
        list.map(item => {
          return <div><Link href={'/photo/' + item.id}>{item.txt}</Link></div>
        })
      }
    </div>
  )
}

const list = [
  {
    id: 1,
    txt: 'hello'
  },
  {
    id: 2,
    txt: 'world'
  }
]