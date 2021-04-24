import './donators.css';
import DontorItem from './DonatorItem.js';
import useShowDonators from "../hooks/useShowDonators.js";

const Donators = () => {

    const { showDonators } = useShowDonators()

    return(
        <div className="donators">
            {showDonators().map((donator, index) => <DontorItem key={index} data={donator}/>)}
        </div>
    )
}

export default Donators;