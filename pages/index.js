function Page({
    insults
}) {
    return ( <
        div >
        <
        h1 > {
            insults
        } < /h1> <
        style jsx > {
            `
      h1 {
        text-align: center;
      }

      div {
  width: 100%;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: blue;
}

    `
        } < /style> < /
        div >
    );
}

Page.getInitialProps = async (ctx) => {
    const res = await fetch('https://evilinsult.com/generate_insult.php?lang=en&type=json')
    const json = await res.json()
    return {
        insults: json.insult
    }
}

export default Page