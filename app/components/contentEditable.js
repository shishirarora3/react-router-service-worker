import React, { PropTypes, Component }  from 'react';
var ContentEditable = React.createClass({
    render: function(){
        return (
        	<div className={this.props.className} 
        	onInput={this.handleInput} 
        	onBlur={this.handleChange} 
        	contentEditable="true" 
        	dangerouslySetInnerHTML={{__html: this.props.html}}>
        	</div>
        );
    },
    shouldComponentUpdate: function(nextProps){
        return nextProps.html !== this.getDOMNode().innerHTML;
    },
    handleChange: function(){
        var html = this.getDOMNode().innerHTML;
        if (this.props.onChange && html !== this.lastHtml) {
            this.props.onChange({
                target: {
                    value: html
                }
            });
        }
        this.lastHtml = html;
    }
});


export default ContentEditable;