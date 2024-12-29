export default function History({history}) {
    return(
        <div>
            <ul>
                {history.map((item, index) => (
                    <li key={index}>
                        <span>{item.company} {item.location} {item.position} {item.date}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}