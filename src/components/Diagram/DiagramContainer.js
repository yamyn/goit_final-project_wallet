import { connect } from 'react-redux';
import Diagram from './Diagram';

import {
    getStatistic,
    getCosts,
    getProfit,
} from '../../redux/walet/waletSelectors';

import { getTransStatistic } from '../../redux/walet/waletOperations';

const mapStateToProps = state => ({
    statistic: getStatistic(state),
    costs: getCosts(state),
    profit: getProfit(state),
});

const mapDispatchToProps = {
    getStatistic: time => getTransStatistic(time),
};

export default connect(mapStateToProps, mapDispatchToProps)(Diagram);
