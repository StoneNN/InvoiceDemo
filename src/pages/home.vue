<!--
 * @Author: Nn
 * @Date: 2022-04-06 17:34:31
 * @LastEditors: Nn
 * @LastEditTime: 2022-04-09 16:51:26
 * @Description: 
-->

<!--
<template>
        <h1>home页面</h1>
</template>
<script>
    export default {
        name:"HomeCpnt",
    }
</script>
<style scoped>
    
</style>
-->

<template>
<!-- 
    :row-key="record => record.id" 与 row-key="id" 等效
 -->
    <a-table 
        :columns="columns" 
        :data-source="data"
        :row-key="record => record.id"
    >
        <a slot="name" slot-scope="text">{{ text }}</a>
        <span slot="customTitle"><a-icon type="smile-o" /> Name</span>
        <span slot="action" slot-scope="text, record">
            <a>Invite 一 {{ record.name }}</a>
            <a-divider type="vertical" />
            <a>Delete</a>
            <a-divider type="vertical" />
            <a class="ant-dropdown-link"> More actions <a-icon type="down" /> </a>
        </span>
    </a-table>
</template>
<script>
    import Vue from "vue";
    import { Table, Icon, Divider, Tag} from "ant-design-vue";
    import 'ant-design-vue/dist/antd.css';
    
    Vue.use(Table).use(Icon).use(Divider).use(Tag);

    const columns = [
        {
            dataIndex: 'name',
            key: 'name',
            slots: { title: 'customTitle' },
            scopedSlots: { customRender: 'name' },
        },
        {
            title: 'Age',
            dataIndex: 'age',
            key: 'age',
        },
        {
            title: 'Address',
            dataIndex: 'address',
            key: 'address',
        },
        {
            title: 'Action',
            key: 'action',
            scopedSlots: { customRender: 'action' },
        },
        ];

    const data = [
        {
            id: '1',
            name: 'John Brown',
            age: 32,
            address: 'New York No. 1 Lake Park',
            tags: ['nice', 'developer'],
        },
        {
            id: '2',
            name: 'Jim Green',
            age: 42,
            address: 'London No. 1 Lake Park',
            tags: ['loser'],
        },
        {
            id: '3',
            name: 'Joe Black',
            age: 32,
            address: 'Sidney No. 1 Lake Park',
            tags: ['cool', 'teacher'],
        },
    ];

    export default {
        name:"HomeCpnt",
        data() {
            return {
                data,
                columns,
            };
        },
    };
</script>