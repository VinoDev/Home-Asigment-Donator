import './donatorItem.css';

const DonatorItem = (props) => {
    const { name, amount } = props.data;
    return (
        <div className="donator-item">
            <div className="donator-item-main">
                <span className="donator-amount">
                    {'$' + amount}
                </span>
                <span className="donator-name">
                    {name}
                </span>
            </div>
            <div className="donator-extras">
            </div>
        </div>
    )
}

export default DonatorItem;