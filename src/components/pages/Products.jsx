import { useParams } from "react-router-dom"

export default function Products() {
    const { id } = useParams();
    return <div>
        Products Lists
        <p>Showing products with id: {id}</p>
    </div>;
}