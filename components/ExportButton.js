import React, {
	Component,
	PropTypes
} from 'react';
import ReactDOM from 'react-dom';
import $ from '../vendor/jquery-3.1.1';
import util from './util';
import {Button} from 'antd';

class ExportButton extends Component{
	submit(){
		if(this.props.data && typeof(this.props.data)=="object"){
	    	util.exportWord(this.props.data);
		}else if(this.props.data && typeof(this.props.data) == "function"){
			var data = this.props.data();
			util.echo(data);
			util.exportWord(data);
		}
		else{
			var d = {};
			var t = $('form').serializeArray();
		    $.each(t, function() {
		      d[this.name] = this.value;
		    });	
		}
	}
	render(){
		return (<Button type="primary" onClick={this.submit.bind(this)}>导出</Button>)
	}
}
export{ExportButton}