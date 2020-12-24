import React from 'react';
import ReactDOM from 'react-dom';
import {emailData} from './emailData';
import { ReactComponent as AttachmentIcon } from './icon_clip.svg';
import { useState } from "react";
import DatePicker from "react-datepicker";
import moment from 'moment';

import "react-datepicker/dist/react-datepicker.css";
import './index.css'; 

const SearchBar = () => {
	const SearchBarTemplate = ({value, onClick }) => (
		<div className="searchBar">
			<i className="calendar" onClick={onClick}><img src="images/icon_calender.svg" id="calendar" alt="calendar icon" /></i>
			<div className="input" onClick={onClick}><input type="text" name="date" defaultValue={value} /></div>
			<div className="searchIcon"><img src="images/icon_search.svg" id="search" alt="search icon" /></div>
		</div>
	);

	const [startDate, setStartDate] = useState(null);
	const [endDate, setEndDate] = useState(null);
	const onChange = (dates) => {
		const [start, end] = dates;
		setStartDate(start);
		setEndDate(end);
	};

	const inputValue = moment(`${startDate}`).format('YYYY/MM/DD') +
	' - ' + moment(`${endDate}`).format('YYYY/MM/DD');

	return (
	  	    <DatePicker
	  	      selected={null}
	  	      onChange={onChange}
	  	      startDate={startDate}
	  	      endDate={endDate}
	  	      selectsRange
	  	      monthsShown={2}
	  	      openToDate={new Date()}
	  	      value={!endDate ? new Date() : inputValue}
	  	      customInput={<SearchBarTemplate/>}
	  	      shouldCloseOnSelect={startDate && !endDate}
	  	      peekNextMonth
	  	      showMonthDropdown
	  	      showYearDropdown
	  	      dropdownMode="select"
	  	    />
	  	  );
};

class SearchResult0 extends React.Component {
	render(){
		return(
			<div className="resultContainer">
				<p className="resultCount">Results: 0 mail(s)</p>
				<div className="resultShowContainer">
					<div className="logoImgWrapper">
						<img src="images/logo.png" id="logo" alt="logo" />
					</div>
				</div>
			</div>
		)
	}
}

class ResultTheadMobile extends React.Component {
	render(){
		return(
			<tr>
				<th className="mobile" style={{width: "100%"}}>
					<div> From 
						<div className="upArrowIcon" style={{ marginLeft: "4px"}}>
							<img src="images/icon_arrow01.svg" alt="up arrow incon"/>
						</div>
					</div>
					<div > To </div> 
					<div > Subject </div>
					<div > Date </div>
				</th>
			</tr>
		)
	}
}

class ResultTableHeader extends React.Component{

	render(){
		return(
			<tr>
				<th
              className='mailFrom'>From</th>
				<th className="to">To</th>
				<th className="unReadMsg"></th>
				<th className="subject">Subject</th>
				<th className="body">Body</th>
				<th className="attachment"></th>
				<th className="date">Date
					<div className="upArrowIcon"><img src="images/icon_arrow01.svg" alt="up arrow incon"/></div>
				</th>
			</tr>
		)
	}
}

function ShowAttachmentICon(props){
	if(props.hasAttachment){
		return (			
			<div className="attachmentIconWrap">
				{ /* AttachmentIcon is an actual React component */}
				<AttachmentIcon className="attachmentIcon"/>
			</div>			
		)
	}else{
			return null
		}
}

function UnreadMsgCount(props){
	if(props.UnreadMsgCount >= 1){
		return(
			<div className="unReadMsgCount">+{props.UnreadMsgCount}</div>
		)
	}else{
		return null
	}
}

//this is a function to add mailto link to mails

function mailto(mails){
	var mailtoMail = [];
	if (Array.isArray(mails)){
		/*exact a subarray exclude the last item*/
		var subMails = mails.slice(0, mails.length-1)
		subMails.map((mail) =>
			
		mailtoMail.push(<a href={"mailto:"+ mail }>{mail}, </a>));
		/*add the last mail to mailtoMail*/
		mailtoMail.push(<a href={"mailto:"+ mails[mails.length-1] }>{mails[mails.length-1]}</a>)
	}else{
		mailtoMail.push(<a href={"mailto:"+ mails }>{mails}</a>)
	}

	return mailtoMail
}

function ResultItemMobile(props){
	const emailData = props.emailData;
	const emailItems = emailData.map((email)=>
		<tr key={email.subject}>
			<td>
			 	<div className="tdLeft" >
					<div className="mailIcon">
						<img src="images/icon_mail_sp.svg" alt="mail icon"/>
					</div>
					<div className="mails">
						<p className="mailFrom"><b>{mailto(email.from)}</b></p>
						<p className="mailTo">{mailto(email.to)}</p>
					</div>
				</div>
				<div className="tdRight">
					<ShowAttachmentICon hasAttachment={email.hasAttachment} />
					<span className="date">{email.date}</span>
					<div className="rightArrowIcon">
						<img src="images/icon_arrow02.svg"/>
					</div>
				</div>
				
				<p className="subject">{email.subject}</p>
				<p className="body">{email.body}</p>
				<UnreadMsgCount UnreadMsgCount={email.unreadMsgCount} />
			</td>				
		</tr>
	)
	return emailItems; 
}

function ResultItem(props){
	const emailData = props.emailData;
	const emailItems = emailData.map((email) =>
		<tr key={email.subject}>
			<td>{mailto(email.from)}</td>
			<td>{mailto(email.to)}</td>
			<td className="unReadMsg"><UnreadMsgCount UnreadMsgCount={email.unreadMsgCount} /></td>
			<td>{email.subject}</td>
			<td className="body">{email.body}</td>
			<td className="attachment"><ShowAttachmentICon hasAttachment={email.hasAttachment} /></td>
			<td className="date">{email.date}</td>
		</tr>
	);
	return emailItems; 
}

class SearchResult extends React.Component{
	constructor() {
	  super();
	  this.handleWindowSizeChange = this.handleWindowSizeChange.bind(this);
	  this.state = {
	    width: window.innerWidth,
	  };
	}

	componentDidMount() {
	  window.addEventListener('resize', this.handleWindowSizeChange);
	}

	// make sure to remove the listener
	// when the component is not mounted anymore
	/*componentWillUnmount() {
	  window.removeEventListener('resize', this.handleWindowSizeChange);
	}*/

	handleWindowSizeChange = () => {
	  this.setState({ width: window.innerWidth });
	};

	render() {
	  const { width } = this.state;
	  const isMobile = width <= 780;

	  if (isMobile) {
	  	return(
  		   	<div className="resultContainer">
  				<p className="resultCount">Results: {this.props.resultCount} mail(s)</p>
  				<div className="resultShowContainer">
  					<div className="tableWrapper">
  						<table>
  							<thead>
  								<ResultTheadMobile />
  							</thead>
  							<tbody>
  								<ResultItemMobile emailData={emailData} />
  							</tbody>
  						</table>
  					</div>
  				</div>
  			</div>
	  	)
	  } else {
		  	return(
			   	<div className="resultContainer">
					<p className="resultCount">Results: {this.props.resultCount} mail(s)</p>
					<div className="resultShowContainer">
						<div className="tableWrapper">
							<table>
								<thead>
									<ResultTableHeader />
								</thead>
								<tbody>
									<ResultItem emailData={emailData} />
								</tbody>
							</table>
						</div>
					</div>
				</div>
		  	)
		}
	}
}

class MailArchiver extends React.Component {
	render(){
		if(emailData.length === 0){
			return (
				<React.Fragment>
					<SearchBar />
					<SearchResult0 />
				</React.Fragment>
			)
		}else{
			return(
				<React.Fragment>
					<SearchBar />
					<SearchResult resultCount = {emailData.length}/>
				</React.Fragment>
			)
		}
		
	}
}

ReactDOM.render(<MailArchiver />, document.getElementById('root'))