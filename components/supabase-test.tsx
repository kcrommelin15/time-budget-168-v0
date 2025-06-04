'use client'

import { useState } from 'react'
import { testSupabaseConnection } from '@/lib/supabase'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { CheckCircle, XCircle, Loader2 } from 'lucide-react'

export function SupabaseTest() {
  const [result, setResult] = useState<{ success: boolean; message: string } | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  const handleTest = async () => {
    setIsLoading(true)
    setResult(null)
    
    try {
      const testResult = await testSupabaseConnection()
      setResult(testResult)
    } catch (error) {
      setResult({
        success: false,
        message: `Test failed: ${error instanceof Error ? error.message : 'Unknown error'}`
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <span>Supabase Connection</span>
        </CardTitle>
        <CardDescription>
          Test the connection between V0 app and Supabase backend
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <Button 
          onClick={handleTest} 
          disabled={isLoading}
          className="w-full"
        >
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Testing Connection...
            </>
          ) : (
            'Test Supabase Connection'
          )}
        </Button>
        
        {result && (
          <div className={`flex items-center gap-2 p-3 rounded-md ${
            result.success 
              ? 'bg-green-50 text-green-800 border border-green-200' 
              : 'bg-red-50 text-red-800 border border-red-200'
          }`}>
            {result.success ? (
              <CheckCircle className="h-4 w-4" />
            ) : (
              <XCircle className="h-4 w-4" />
            )}
            <span className="text-sm">{result.message}</span>
          </div>
        )}
        
        <div className="text-xs text-gray-500 space-y-1">
          <p><strong>Expected:</strong> ✅ "Supabase connection successful!"</p>
          <p><strong>If failed:</strong> Check V0 environment variables</p>
        </div>
      </CardContent>
    </Card>
  )
} 