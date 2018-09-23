import React from 'react';
import { connect } from 'react-redux';
import { getHashtags } from './Actions'
import { bindActionCreators} from 'redux'


class Teste extends React.Component {

    componentDidMount(){
        this.props.getHashtags();
    }
    
    render() {
        return (
            <div>
                {this.props.markets.map(market =>
                    <p key={market.id}>{market.name}</p>
                )}
            </div>    
        );
    }
}

function mapStateToProps(state) {
    return {
        markets: state.mercados.markets
    }
}
// Adiciona as actions
function mapDispatchToProps(dispatch) {
    return bindActionCreators( {getHashtags}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Teste)