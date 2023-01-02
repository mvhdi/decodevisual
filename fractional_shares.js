// this app takes in the dollar amount that a user wants to invest in,
// a list of tickers and the percentage of the position size
// and out puts the fractional number of shares at the current price point for each postion.


// generate the html form

// event listners to form submission to correct errors

// on form submission get live data, and generate table with generated info.

let html_body = document.body;


// outline for form table to hold holdings and percentage 

// < form class="holdings_form" data-role="holdings_form" accept-charset="UTF-8" method="post">

// 	<div class="holdings_form_table" cellspacing="0">

// 		<div class="holdings_form_table_header">

// 			<div class="holdings_form_table_row" data-role="holding_row">
// 				<div class="holdings_form_table_column_header column_name_ticker">
// 					"TICKER "
// 					<span> required </span>
// 				</div>
// 				<div class="holdings_form_table_column_header column_name_percentage">
// 					"PERCENTAGE "
// 					<span> required </span>
// 				</div>
// 			</div>
// 		</div>

// 		<div class="holdings_form_table_body">

// 			<div class="holdings_form_table_row" data-role="holding_row">
// 				<div class="holdings_form_table_column_row column_name_ticker">
// 					<input class="holdings_form_table_input input_type_ticker" type="text" placeholder="Ticker symbol..." id="holding_ticker">
// 				</div>
// 				<div class="holdings_form_table_column_row column_name_percentage">
// 					<input class="holdings_form_table_input input_type_percentage" type="text"  placeholder="Percentage" id="holding_percentage">
// 				</div>
// 			</div>
// 		</div>

// 	</div>
// </form>