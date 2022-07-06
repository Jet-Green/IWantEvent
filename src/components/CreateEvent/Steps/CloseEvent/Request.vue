<script setup></script>
<template>
  <a-row>
    <a-col style="margin: 10px 20px 20px 0px;">Тема запроса:</a-col>
    <a-col style="margin: 7px 0px 8px 0px;"><a-input></a-input></a-col>
  </a-row>
  <a-row>
    <a-textarea placeholder="Текст запроса" style="height: 300px;"></a-textarea>
  </a-row>
  <a-row style="margin: 10px 0px 10px 0px;">Выберите кому адресовать данный запрос или отметьте всех</a-row>
  <a-row>
    <a-checkbox>Организатор</a-checkbox>
    <a-checkbox>Площадка</a-checkbox>
    <a-checkbox>Ведущий</a-checkbox>
    <a-checkbox>Артист</a-checkbox>
    <a-checkbox>Партнёр</a-checkbox>
  </a-row>
</template>