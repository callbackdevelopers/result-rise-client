import Head from 'next/head'
import React from 'react'
import Layout from '../../components/AdminDashboardLayout/Layout'

const notice = () => {
    return (
        <div>
            <Layout>
                <Head><title>Notice - Result Rise</title></Head>
                <p>notice</p>
            </Layout>
        </div>
    )
}

export default notice