// import React, { useState, useImperativeHandle, useRef } from 'react';
// import { Button, Table, Modal, Form, Row, Col, Input } from '@aurum/pfe-ui';
// import { useEffect } from 'react';

// const AddWithTableModal = (props, ref) => {
//   const [data, setData] = useState([]);
//   const [isModalVisible, setIsModalVisible] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);
//   const [storeList, setStoreList] = useState([]);
//   const [selectRows, setSelectRows] = useState([]);
//   const [total, setTotal] = useState(0);
//   const [pageNum, setPageNum] = useState(1);
//   const [outPageNum, setOutPageNum] = useState(1);
//   const [pageSize, setPageSize] = useState(getPageSize());

//   const form = useRef();
//   useImperativeHandle(ref, () => ({
//     getStores: () => data
//   }));
//   useEffect(() => {
//     setData(props.data)
//   }, [props.data])
//   const columns = [

//   ];
//   const modalColumns = [

//   ];
//   const showModal = () => {
//     setIsModalVisible(true);
//   };
//   const handleCancel = () => {
//     setTotal(0);
//     setPageNum(1);
//     setStoreList([]);
//     setIsModalVisible(false);
//   };
//   const handleOk = () => {
//     const uniqueArr = Array.from(new Set([...data, ...selectRows].map(JSON.stringify))).map(JSON.parse)
//     setData(uniqueArr);
//     handleCancel()
//   };

//   const onFinish = (values) => {
//     setPageNum(1);
//   };
//   // 切换页码
//   const handleTableChange = (curPageNum, curPageSize) => {
//     setPageNum(curPageNum);
//     setPageSize(curPageSize);
//   };
//   return (
//     <div style={{ marginTop: 20, padding: "18px 16px", border: "1px solid rgba(0,0,0,0.1)", borderRadius: 4 }}>
//       <Button.Group>
//         <Button type="primary" onClick={showModal}>
//           {props.btnTxt}
//         </Button>
//         {/* <UploadExcelButton
//           type="menuRuleStore"
//           paramField="file"
//           name={$t('store_lbl_import_store')}
//           modalTitle={$t('store_lbl_import_store')}
//           errListField="errorList"
//           templateURL="/exclusionrule/export/3"
//           uploadURL="/menu/store/excel/fetch"
//           updateTableList={(res) => {
//             const uniqueArr = Array.from(new Set([...data, ...res.data.successList].map(JSON.stringify))).map(JSON.parse)
//             setData(uniqueArr);
//           }}
//         /> */}
//       </Button.Group>
//       <Table
//         rowKey="storeCode"
//         style={{ marginTop: 20 }}
//         columns={columns}
//         dataSource={data}
//         pagination={{ current: outPageNum, defaultPageSize: getPageSize(), showTotal: (total) => `总共 ${total} 条记录` }}
//         onChange={({ current }) =>
//           setOutPageNum(current)
//         }
//       />
//       <Modal
//         destroyOnClose
//         width={1000}
//         className="pcm-table-modal-margin-top20"
//         title={$t('cp_choose_a_restaurant')}
//         open={isModalVisible}
//         onOk={handleOk}
//         onCancel={handleCancel}
//       >
//         <Form
//           ref={form}
//           name="storeSearchForm"
//           className="pcm-search-form"
//           onFinish={onFinish}
//           size="middle"
//           layout="vertical"
//         >
//           <Row gutter={32}>
//             <Col span={4}>
//               <Form.Item
//                 label={`${$t('product_rule_baseMenu_ct_name_or_code')}`}
//                 name="store"
//               >
//                 <Input
//                   placeholder={$t('product_lbl_pleaseInput')}
//                   allowClear
//                 />
//               </Form.Item>
//             </Col>
//             <StoreCondition
//               noRegion
//               span={4}
//               marketCode="marketCodes"
//               provinceCity="regionList"
//               priceTier="priceTierCodes"
//               beType="beTypes"
//               lbsType="lbsLabels"
//             />
//           </Row>
//           <Row gutter={32}>
//             <Col span={12}>
//               <Button
//                 type="primary"
//                 className="button-primary"
//                 htmlType='submit'
//               >
//                 {$t('product_btn_query')}
//               </Button>
//               <Button htmlType='reset'>
//                 {$t('product_btn_reset')}
//               </Button>
//             </Col>
//           </Row>
//         </Form>
//         <Table
//           loading={isLoading}
//           rowKey="storeCode"
//           style={{ marginTop: 20 }}
//           scroll={{ x: '100%' }}
//           columns={modalColumns}
//           dataSource={storeList}
//           pagination={{ total, current: pageNum, pageSize, showTotal: (total) => `总共 ${total} 条记录` }}
//           onChange={(pagination) =>
//             handleTableChange(pagination.current, pagination.pageSize)
//           }
//           rowSelection={{
//             onChange: (selectedRowKeys, selectedRows) => {
//               setSelectRows(selectedRows.map(item => ({ storeCode: item.storeCode, storeName: item.storeNameCn })))
//             }
//           }}
//         />
//       </Modal>
//     </div>
//   );
// };

// export default React.forwardRef(AddWithTableModal);