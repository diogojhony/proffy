import React, { useState } from 'react';
import { View, ScrollView, Text, TextInput, Alert } from 'react-native';

import { Feather } from '@expo/vector-icons';

import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';
import { BorderlessButton, RectButton } from 'react-native-gesture-handler';

import api from '../../services/api';

import styles from './styles';

function TeacherList() {
  const [teachers, setTeachers] = useState<Teacher[]>([]);
  const [isFiltersVisible, setIsFiltersVisible] = useState(false);

  const [subject, setSubject] = useState('');
  const [weekDay, setWeekDay] = useState('');
  const [time, setTime] = useState('');

  function handleToggleFiltersVisible() {
    setIsFiltersVisible(!isFiltersVisible);
  }

  async function handleFiltersSubmit() {
    const response = await api.get('classes', {
      params: {
        subject,
        time,
        week_day: weekDay,
      },
    });

    console.log(response.data);

    setIsFiltersVisible(false);
    setTeachers(response.data);
  }

  return (
    <View style={styles.container}>
      <PageHeader
        title="Proffys Disponíveis"
        headerRigth={
          <BorderlessButton onPress={handleToggleFiltersVisible}>
            <Feather name="filter" size={20} color="#fff" />
          </BorderlessButton>
        }
      >
        {isFiltersVisible && (
          <View style={styles.searchForm}>
            <Text style={styles.label}>Matéria</Text>

            <TextInput
              style={styles.input}
              value={subject}
              onChangeText={setSubject}
              placeholder="Qual a matéria?"
              placeholderTextColor="#c1bccc"
            />

            <View style={styles.inputGroup}>
              <View style={styles.inputBlock}>
                <Text style={styles.label}>Dia da semana</Text>

                <TextInput
                  style={styles.input}
                  value={weekDay}
                  onChangeText={setWeekDay}
                  placeholder="Qual o dia?"
                  placeholderTextColor="#c1bccc"
                />
              </View>

              <View style={styles.inputBlock}>
                <Text style={styles.label}>Horário</Text>

                <TextInput
                  style={styles.input}
                  value={time}
                  onChangeText={setTime}
                  placeholder="Qual horário?"
                  placeholderTextColor="#c1bccc"
                />
              </View>
            </View>

            <RectButton
              style={styles.submitButton}
              onPress={handleFiltersSubmit}
            >
              <Text style={styles.submitButtonText}>Filtrar</Text>
            </RectButton>
          </View>
        )}
      </PageHeader>

      <ScrollView
        style={styles.teacherList}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 16,
        }}
      >
        {teachers.map((teacher) => (
          <TeacherItem key={teacher.id} teacher={teacher} />
        ))}
      </ScrollView>
    </View>
  );
}

export default TeacherList;
