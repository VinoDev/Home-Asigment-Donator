import Donators from '../components/Donators.js';
import ControlPanel from '../components/ControlPanel.js';
import useShowDonators from '../hooks/useShowDonators.js';

const Home = () => {

    const {
        showDonators,
        searchInput,
        onSearchInputChange
    } = useShowDonators()

    return (
        <div className="page">
            <ControlPanel searchInput={searchInput} onSearchInputChange={onSearchInputChange}/>
            <Donators showDonators={showDonators}/>
        </div>
    )
}

export default Home