import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

function Index() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center mb-8">Welcome to Country Explorer</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Country 1</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Information about Country 1.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Country 2</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Information about Country 2.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Country 3</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Information about Country 3.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default Index;