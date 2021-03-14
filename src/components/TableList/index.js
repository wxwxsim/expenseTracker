import React, {forwardRef} from "react";
import { Table, Typography } from "antd";
const { Text } = Typography

const TableList = forwardRef((props, ref) => {
 	const {dataColumns, dataItems, tableTitle} = props;

	return (
		<div style={{paddingTop: 80}}>
			<Text style={{fontSize:24}}>{tableTitle}</Text>
			<Table
				ref={ref}
				rowKey="id"
				columns={dataColumns}
				dataSource={dataItems}
				bordered={true}
			/>
		</div>
	);
})
export default TableList

