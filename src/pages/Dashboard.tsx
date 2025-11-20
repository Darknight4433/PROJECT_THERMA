import { useEffect, useState } from "react";
import { database } from "@/lib/firebase";
import { ref, onValue } from "firebase/database";
import { Card } from "@/components/ui/card";
import { Thermometer, Droplets, Gauge, Activity } from "lucide-react";

interface SensorData {
  S0: number;
  A1: number;
  A2: number;
  B1: number;
  P1: number;
  P2: number;
  TDS: number;
  timestamp: number;
}

const Dashboard = () => {
  const [sensorData, setSensorData] = useState<SensorData | null>(null);
  const [moduleInfo, setModuleInfo] = useState<any>(null);

  useEffect(() => {
    // Listen to sensor data
    const sensorRef = ref(database, "modules/module_1/sensors");
    const unsubscribeSensors = onValue(sensorRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        // Get the most recent entry
        const keys = Object.keys(data).sort().reverse();
        if (keys.length > 0) {
          setSensorData(data[keys[0]]);
        }
      }
    });

    // Listen to module info
    const infoRef = ref(database, "modules/module_1/info");
    const unsubscribeInfo = onValue(infoRef, (snapshot) => {
      setModuleInfo(snapshot.val());
    });

    return () => {
      unsubscribeSensors();
      unsubscribeInfo();
    };
  }, []);

  const formatValue = (value: number, decimals: number = 2) => {
    return value?.toFixed(decimals) || "0.00";
  };

  return (
    <div className="min-h-screen bg-background pt-16">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              THERMA Dashboard
            </span>
          </h1>
          {moduleInfo && (
            <div className="text-muted-foreground">
              <p className="text-lg">{moduleInfo.name}</p>
              <p>{moduleInfo.location}</p>
            </div>
          )}
        </div>

        {/* Status Indicator */}
        <div className="mb-8">
          <Card className="p-6 border-border bg-card">
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="w-4 h-4 bg-primary rounded-full animate-pulse" />
                <div className="absolute inset-0 w-4 h-4 bg-primary rounded-full animate-ping" />
              </div>
              <div>
                <p className="text-lg font-semibold">System Status: Active</p>
                <p className="text-sm text-muted-foreground">
                  Real-time monitoring active • Last update: {sensorData ? new Date(sensorData.timestamp).toLocaleTimeString() : "N/A"}
                </p>
              </div>
            </div>
          </Card>
        </div>

        {/* Sensor Data Grid */}
        {sensorData ? (
          <>
            {/* Flow Sensors */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                <Droplets className="h-6 w-6 text-primary" />
                Flow Sensors (L/min)
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                <Card className="p-6 border-border bg-card hover:border-primary/50 transition-colors">
                  <div className="text-sm text-muted-foreground mb-1">S0 - Main Flow</div>
                  <div className="text-3xl font-bold text-primary">{formatValue(sensorData.S0)}</div>
                  <div className="text-xs text-muted-foreground mt-1">Liters per minute</div>
                </Card>

                <Card className="p-6 border-border bg-card hover:border-secondary/50 transition-colors">
                  <div className="text-sm text-muted-foreground mb-1">A1 - Branch A1</div>
                  <div className="text-3xl font-bold text-secondary">{formatValue(sensorData.A1)}</div>
                  <div className="text-xs text-muted-foreground mt-1">Liters per minute</div>
                </Card>

                <Card className="p-6 border-border bg-card hover:border-accent/50 transition-colors">
                  <div className="text-sm text-muted-foreground mb-1">A2 - Branch A2</div>
                  <div className="text-3xl font-bold text-accent">{formatValue(sensorData.A2)}</div>
                  <div className="text-xs text-muted-foreground mt-1">Liters per minute</div>
                </Card>

                <Card className="p-6 border-border bg-card hover:border-primary/50 transition-colors">
                  <div className="text-sm text-muted-foreground mb-1">B1 - Branch B1</div>
                  <div className="text-3xl font-bold text-primary">{formatValue(sensorData.B1)}</div>
                  <div className="text-xs text-muted-foreground mt-1">Liters per minute</div>
                </Card>
              </div>
            </div>

            {/* Pressure Sensors */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                <Gauge className="h-6 w-6 text-secondary" />
                Pressure Sensors
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                <Card className="p-6 border-border bg-card hover:border-secondary/50 transition-colors">
                  <div className="text-sm text-muted-foreground mb-1">P1 - Inlet Pressure</div>
                  <div className="text-4xl font-bold text-secondary">{formatValue(sensorData.P1)}</div>
                  <div className="text-xs text-muted-foreground mt-1">Pressure units</div>
                </Card>

                <Card className="p-6 border-border bg-card hover:border-secondary/50 transition-colors">
                  <div className="text-sm text-muted-foreground mb-1">P2 - Outlet Pressure</div>
                  <div className="text-4xl font-bold text-secondary">{formatValue(sensorData.P2)}</div>
                  <div className="text-xs text-muted-foreground mt-1">Pressure units</div>
                </Card>
              </div>
            </div>

            {/* Water Quality */}
            <div>
              <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                <Activity className="h-6 w-6 text-accent" />
                Water Quality
              </h2>
              <Card className="p-6 border-border bg-card hover:border-accent/50 transition-colors">
                <div className="text-sm text-muted-foreground mb-1">TDS - Total Dissolved Solids</div>
                <div className="text-4xl font-bold text-accent">{sensorData.TDS}</div>
                <div className="text-xs text-muted-foreground mt-1">Parts per million (ppm)</div>
              </Card>
            </div>
          </>
        ) : (
          <Card className="p-12 text-center border-border bg-card">
            <Activity className="h-16 w-16 text-muted-foreground mx-auto mb-4 animate-pulse" />
            <p className="text-xl text-muted-foreground">Waiting for sensor data...</p>
            <p className="text-sm text-muted-foreground mt-2">Make sure your ESP32 module is connected and transmitting</p>
          </Card>
        )}

        {/* System Info */}
        <div className="mt-8 p-6 rounded-lg border border-border/50 bg-gradient-to-br from-primary/5 to-secondary/5">
          <h3 className="text-lg font-semibold mb-4">System Information</h3>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <span className="text-muted-foreground">Module ID:</span>
              <span className="ml-2 font-mono">module_1</span>
            </div>
            <div>
              <span className="text-muted-foreground">Controller:</span>
              <span className="ml-2">ESP32 (FCCID: 2A53N-EPS32)</span>
            </div>
            <div>
              <span className="text-muted-foreground">Update Interval:</span>
              <span className="ml-2">2 seconds</span>
            </div>
            <div>
              <span className="text-muted-foreground">Database:</span>
              <span className="ml-2">Firebase Realtime DB</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
