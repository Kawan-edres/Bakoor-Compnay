const TestPage = ({data}) => {
    console.log(data);
    return (
        <div>
           
        </div>
    );
}

export default TestPage;

export async function getStaticProps() {
 
    const response = await fetch('http://192.168.0.8:8000/api/clients')
    const data = await response.json()
    console.log(data);

  
    
    return {
      props: {
        data,
      },
    }
  }
  
