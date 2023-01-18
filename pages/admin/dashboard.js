import Head from 'next/head'
import React from 'react'
import Layout from "../../components/AdminDashboardLayout/Layout"
import Overview from '../../components/DashboardOverview/Overview'
const dashboard = () => {
    return (
        <div>
            <Head><title>Admin Dashboard - Result Rise</title></Head>
            <Layout>
                <Overview></Overview>
            </Layout>
        </div>
    )
}

export default dashboard