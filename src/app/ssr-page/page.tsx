export const dynamic = 'force-dynamic';

export default async function SSRPage() {
  let data;

  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    data = await response.json();
  } catch (error) {
    console.error('Error fetching data:', error);

    data = {
      title: 'Error fetching data',
      body: 'Please try again later.'
    };
  }

  return (
    <div>
      <h1>Server-Side Rendered Page</h1>
      <p>Title: {data.title}</p>
      <p>Content: {data.body}</p>
    </div>
  );
}
