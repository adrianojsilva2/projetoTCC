/*/
import React from 'react';
import {Text, View} from 'react-native';

export default function Results() {
  return (
    <View>
      <Text>Page results</Text>
    </View>
  );
}
*/
import React, {useEffect, useState} from 'react';
import {ActivityIndicator, FlatList, Text, View} from 'react-native';

export default function Results() {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    // https://qualisapi.herokuapp.com/api/qualis/
    // https://reactnative.dev/movies.json

    fetch('https://qualisapi.herokuapp.com/api/qualis/')
      .then((response) => response.json())
      .then((data) => {
        //console.log(data['message']);
        //console.log(data);
        //console.table(data);
        if (data.data[0]) {
          //issn encontrado
          //let newData = removeIdCreateDate(data['data']);
          let newData = data.data;
          console.table(newData);
          document.getElementsByClassName('json-viewer')[0].style.display =
            'block';
          jsonViewer.showJSON(newData);
          document.getElementById('loader').style.display = 'none';
        } else {
          //issn não encontrado
          console.table(data);
          document.getElementsByClassName('json-viewer')[0].style.display =
            'block';
          jsonViewer.showJSON(data);
          document.getElementById('loader').style.display = 'none';
          document.getElementById('alertMsgBox').innerHTML = alertMsg(
            'Aviso!',
            'Número de ISSN não encontrado.',
            'bg-info',
          );
        }
      })
      .catch((erro) => {
        console.log('Erro:' + erro);
        document.getElementById('loader').style.display = 'none';
      });
  }, []);

  return (
    <View style={{flex: 1, padding: 24}}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={data}
          keyExtractor={({id}, index) => id}
          renderItem={({item}) => (
            <Text>
              {item.title}, {item.releaseYear}
            </Text>
          )}
        />
      )}
    </View>
  );
}
