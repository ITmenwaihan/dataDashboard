import Image from "next/image";


async function getData( params: {id: number} ) {
  const {id} = params;
  const res: any = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then((data: any) => {
    return data.json()
  })
  return res
}

async function getTime () {
  return Date.now()
}

export default async function Products ({params: {id}}: {params: {id: number}}) {
  const data: any = await getData({id});
  const now = await getTime()
  return (
    <div>
      <h1>
        product: {id}
        体重：{data.weight}
      </h1>
      <h2>
        name: {data.name}
      </h2>
      <h2>
        {now}
      </h2>
      <Image
        src={'http://gips3.baidu.com/it/u=3886271102,3123389489&fm=3028&app=3028&f=JPEG&fmt=auto?w=1280&h=960'}
        width={500}
        height={700}
        alt= "pokemon pic"
        style={{
          objectFit: 'cover'
        }}
        />
    </div>
  )
}


