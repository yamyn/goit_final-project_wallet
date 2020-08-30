import { connect } from 'react-redux';
import Diagram from './Diagram';

import { getStatistic, getStatDate } from '../../redux/walet/waletSelectors';
import { changeStatisticDate } from '../../redux/walet/waletActions';

const mapStateToProps = state => ({
    statisticData: getStatistic(state),
    date: getStatDate(state),
});

const mapDispatchToProps = {
    onChange: changeStatisticDate,
};

export default connect(mapStateToProps, mapDispatchToProps)(Diagram);
