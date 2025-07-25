import React, { ReactNode } from 'react'
import { View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'


type Wrapper = {
    children: ReactNode,
    customCalss?:string
}

const PageWraper: React.FC<Wrapper> = ({ children,customCalss }) => {

    return (
        <SafeAreaView className={`px-5 flex-1 relative ${customCalss}`}>
            <View>
                {children}
            </View>
        </SafeAreaView>
    )
}

export default PageWraper