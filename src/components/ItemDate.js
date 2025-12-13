import './ItemDate.css';

function ItemDate(props){

    // const day=13;
    // const month="December";
    // const year=2025;

    const Day=props.day;
    const Month=props.month;
    const Year=props.year;
    return(<div className='mfg-date'>
        <span>{Day}</span>
        <span>{Month}</span>
        <span>{Year}</span>
    </div>);
}

export default ItemDate;


