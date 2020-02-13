import birdsData from './birds-data';

const Data = async (id, section) => {
  const data = [];
  data.push(await birdsData[section][id].name);
  data.push(await birdsData[section][id].image);
  data.push(await birdsData[section][id].audio);
  console.log(data);
  return data;
};

export default Data;
