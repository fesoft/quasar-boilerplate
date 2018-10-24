<template>
  <q-page padding>
    <q-card>
    <q-table
      title="Bancos"
      :data="tableData"
      :columns="columns"
      row-key="codigob"
    />
    </q-card>
  </q-page>
</template>

<script>
export default {
  // name: 'PageName',
  data: () => ({
    columns: [
      {
        name: 'codigob',
        required: true,
        label: 'Código',
        align: 'left',
        field: 'codigob',
        sortable: true,
        classes: 'my-class',
        style: 'width: 100px'
      },
      {
        name: 'nome',
        required: true,
        label: 'Nome',
        align: 'left',
        field: 'nome',
        sortable: true,
        classes: 'my-class',
        style: 'width: 100px'
      }
    ],
    tableData: [
      {
        codigob: '1',
        nome: 'Banco do Brasil'
      },
      {
        codigob: '77',
        nome: 'Banco Inter'
      },
      {
        codigob: '104',
        nome: 'Caixa economica '
      }
    ]
  })
}
</script>

<style>
</style>
