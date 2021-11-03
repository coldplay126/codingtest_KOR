/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import MaterialTable from 'material-table';
import { useHistory } from 'react-router';
import { StyleButton } from '../../Styles/GlobalStyles';
import tableIcons from '../../Styles/TableIcon';
import { useDispatch } from 'react-redux';
import { fetchList } from './listSlice';
import column from './column';

const columns = [
  {
    title: 'Image',
    field: 'img_url',
    render: (rowData) => {
      return <img src={rowData.image_url} style={{ width: '50px' }} />;
    },
  },
  { title: 'Name', field: 'name' },
  { title: 'abv', field: 'abv' },
  { title: 'ph', field: 'ph' },
  { title: 'attenuation level', field: 'attenuation_level' },
];

const List = () => {
  const [datas, setDatas] = useState();
  const history = useHistory();
  const handleClick = () => history.push('/home');
  const dispatch = useDispatch();

  const titleArr = columns.map((el) => el.title);

  const [title, setTitle] = useState(titleArr);
  useEffect(() => {
    dispatch(fetchList()).then((data) => setDatas(data.payload));
    console.log('title 확인', title);
  }, [title]);

  const dataCheck = (sourceIndex, destinationIndex) => {
    let titleChange = title;
    const from = title[sourceIndex];
    const to = title[destinationIndex];

    title[sourceIndex] = to;
    title[destinationIndex] = from;

    dispatch(column(titleChange));
    setTitle(titleChange);
  };

  return (
    <div style={{ maxWidth: '90%' }}>
      <StyleButton onClick={handleClick}>홈으로</StyleButton>
      <MaterialTable
        icons={tableIcons}
        columns={columns}
        data={datas}
        onColumnDragged={dataCheck}
        title="Beer List"
        options={{
          tableLayout: 'auto',
          paging: false,
        }}
      />
    </div>
  );
};

export default List;
