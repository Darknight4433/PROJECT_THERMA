import { useEffect, useState } from "react";
import { database } from "@/lib/firebase";
import { ref, onValue } from "firebase/database";
import { Card } from "@/components/ui/card";
import { Thermometer, Droplets, Gauge, Activity } from "lucide-react";

interface SensorData {
  flow_lpm: number;
  inlet_temp_c: number;
  outlet_temp_c: number;
  panel_temp_c: number;
  pump_pwm: number;
  manual_cmd: boolean;
  mode: string;
  ts: number;
}

interface ThermaRootData {
  efficiency: number;
  flowRate: number;
  pumpSpeed: number;
  pumpStatus: boolean;
  tempInput: number;
  tempOutput: number;
  tempPanel: number;
}

const Dashboard = () => {
  const [sensorData, setSensorData] = useState<SensorData | null>(null);
  const [rootData, setRootData] = useState<ThermaRootData | null>(null);

  useEffect(() => {
    // Listen to live sensor data
    const sensorRef = ref(database, "therma/live");
    const unsubscribeSensors = onValue(sensorRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        setSensorData(data);
      }
    });

    // Listen to root therma data
    const rootRef = ref(database, "therma");
    const unsubscribeRoot = onValue(rootRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        setRootData({
          efficiency: data.efficiency,
          flowRate: data.flowRate,
          pumpSpeed: data.pumpSpeed,
          pumpStatus: data.pumpStatus,
          tempInput: data.tempInput,
          tempOutput: data.tempOutput,
          tempPanel: data.tempPanel
        });
      }
    });

    return () => {
      unsubscribeSensors();
      unsubscribeRoot();
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
          <p className="text-muted-foreground text-lg">Live System Monitoring</p>
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
                <p className="text-lg font-semibold">
                  System Status: {sensorData?.mode === "auto" ? "Auto" : "Manual"}
                </p>
                <p className="text-sm text-muted-foreground">
                  Real-time monitoring • Pump: {sensorData?.pump_pwm || 0} PWM
                </p>
              </div>
            </div>
          </Card>
        </div>

        {/* Sensor Data Grid */}
        {sensorData ? (
          <>
            {/* Live Temperature Sensors */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                <Thermometer className="h-6 w-6 text-primary" />
                Live Temperature Sensors (°C)
              </h2>
              <div className="grid md:grid-cols-3 gap-4">
                <Card className="p-6 border-border bg-card hover:border-primary/50 transition-colors">
                  <div className="text-sm text-muted-foreground mb-1">Panel Temperature (Live)</div>
                  <div className="text-4xl font-bold text-primary">{formatValue(sensorData.panel_temp_c, 1)}</div>
                  <div className="text-xs text-muted-foreground mt-1">Degrees Celsius</div>
                </Card>

                <Card className="p-6 border-border bg-card hover:border-secondary/50 transition-colors">
                  <div className="text-sm text-muted-foreground mb-1">Inlet Temperature (Live)</div>
                  <div className="text-4xl font-bold text-secondary">{formatValue(sensorData.inlet_temp_c, 1)}</div>
                  <div className="text-xs text-muted-foreground mt-1">Degrees Celsius</div>
                </Card>

                <Card className="p-6 border-border bg-card hover:border-accent/50 transition-colors">
                  <div className="text-sm text-muted-foreground mb-1">Outlet Temperature (Live)</div>
                  <div className="text-4xl font-bold text-accent">{formatValue(sensorData.outlet_temp_c, 1)}</div>
                  <div className="text-xs text-muted-foreground mt-1">Degrees Celsius</div>
                </Card>
              </div>
            </div>

            {/* Root Temperature Sensors */}
            {rootData && (
              <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                  <Thermometer className="h-6 w-6 text-secondary" />
                  Aggregate Temperature Data (°C)
                </h2>
                <div className="grid md:grid-cols-3 gap-4">
                  <Card className="p-6 border-border bg-card hover:border-primary/50 transition-colors">
                    <div className="text-sm text-muted-foreground mb-1">Panel Temperature</div>
                    <div className="text-4xl font-bold text-primary">{formatValue(rootData.tempPanel, 2)}</div>
                    <div className="text-xs text-muted-foreground mt-1">Degrees Celsius</div>
                  </Card>

                  <Card className="p-6 border-border bg-card hover:border-secondary/50 transition-colors">
                    <div className="text-sm text-muted-foreground mb-1">Input Temperature</div>
                    <div className="text-4xl font-bold text-secondary">{formatValue(rootData.tempInput, 2)}</div>
                    <div className="text-xs text-muted-foreground mt-1">Degrees Celsius</div>
                  </Card>

                  <Card className="p-6 border-border bg-card hover:border-accent/50 transition-colors">
                    <div className="text-sm text-muted-foreground mb-1">Output Temperature</div>
                    <div className="text-4xl font-bold text-accent">{formatValue(rootData.tempOutput, 2)}</div>
                    <div className="text-xs text-muted-foreground mt-1">Degrees Celsius</div>
                  </Card>
                </div>
              </div>
            )}

            {/* Flow & Pump - Live Data */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                <Droplets className="h-6 w-6 text-secondary" />
                Coolant System (Live)
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                <Card className="p-6 border-border bg-card hover:border-secondary/50 transition-colors">
                  <div className="text-sm text-muted-foreground mb-1">Flow Rate (Live)</div>
                  <div className="text-4xl font-bold text-secondary">{formatValue(sensorData.flow_lpm, 1)}</div>
                  <div className="text-xs text-muted-foreground mt-1">Liters per minute</div>
                </Card>

                <Card className="p-6 border-border bg-card hover:border-accent/50 transition-colors">
                  <div className="text-sm text-muted-foreground mb-1">Pump PWM (Live)</div>
                  <div className="text-4xl font-bold text-accent">{sensorData.pump_pwm}</div>
                  <div className="text-xs text-muted-foreground mt-1">PWM value (0-255)</div>
                </Card>
              </div>
            </div>

            {/* Aggregate Pump Data */}
            {rootData && (
              <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                  <Activity className="h-6 w-6 text-accent" />
                  Pump System (Aggregate)
                </h2>
                <div className="grid md:grid-cols-3 gap-4">
                  <Card className="p-6 border-border bg-card hover:border-secondary/50 transition-colors">
                    <div className="text-sm text-muted-foreground mb-1">Flow Rate</div>
                    <div className="text-4xl font-bold text-secondary">{formatValue(rootData.flowRate, 2)}</div>
                    <div className="text-xs text-muted-foreground mt-1">Liters per minute</div>
                  </Card>

                  <Card className="p-6 border-border bg-card hover:border-accent/50 transition-colors">
                    <div className="text-sm text-muted-foreground mb-1">Pump Speed</div>
                    <div className="text-4xl font-bold text-accent">{formatValue(rootData.pumpSpeed, 1)}</div>
                    <div className="text-xs text-muted-foreground mt-1">Speed value</div>
                  </Card>

                  <Card className="p-6 border-border bg-card hover:border-primary/50 transition-colors">
                    <div className="text-sm text-muted-foreground mb-1">Pump Status</div>
                    <div className="text-4xl font-bold text-primary">{rootData.pumpStatus ? "ON" : "OFF"}</div>
                    <div className="text-xs text-muted-foreground mt-1">Current state</div>
                  </Card>
                </div>
              </div>
            )}

            {/* System Performance */}
            <div>
              <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                <Gauge className="h-6 w-6 text-primary" />
                System Performance
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                <Card className="p-6 border-border bg-card hover:border-primary/50 transition-colors">
                  <div className="text-sm text-muted-foreground mb-1">Temperature Differential (ΔT)</div>
                  <div className="text-4xl font-bold text-primary">
                    {formatValue(sensorData.outlet_temp_c - sensorData.inlet_temp_c, 1)}°C
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">
                    Heat extraction: Outlet - Inlet
                  </div>
                </Card>

                {rootData && (
                  <Card className="p-6 border-border bg-card hover:border-secondary/50 transition-colors">
                    <div className="text-sm text-muted-foreground mb-1">System Efficiency</div>
                    <div className="text-4xl font-bold text-secondary">
                      {formatValue(rootData.efficiency * 100, 2)}%
                    </div>
                    <div className="text-xs text-muted-foreground mt-1">
                      Overall thermal efficiency
                    </div>
                  </Card>
                )}
              </div>
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
              <span className="text-muted-foreground">Database Path:</span>
              <span className="ml-2 font-mono">therma/live</span>
            </div>
            <div>
              <span className="text-muted-foreground">Mode:</span>
              <span className="ml-2">{sensorData?.mode || "Unknown"}</span>
            </div>
            <div>
              <span className="text-muted-foreground">Manual Override:</span>
              <span className="ml-2">{sensorData?.manual_cmd ? "Enabled" : "Disabled"}</span>
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
