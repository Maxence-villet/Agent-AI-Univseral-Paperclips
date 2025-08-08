import React from 'react';
import ReactApexChart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';

interface GameState {
  available_funds: number;
  unsold_inventory: number;
  price_per_clip: number;
  public_demand: number;
  clips_per_second: number;
  inches: number;
}

interface GameData {
  turn: number;
  state: GameState;
  state_text: string;
  buttons: string[];
  decision: string;
}

interface StackedAreaChartProps {
  data: GameData[];
  title?: string;
  height?: number;
}

const StackedAreaChart: React.FC<StackedAreaChartProps> = ({ 
  data, 
  title = "Universal Paperclips - Évolution des métriques",
  height = 400 
}) => {
  // Préparer les données pour ApexCharts
  const categories = data.map(item => `Tour ${item.turn}`);
  
  const series = [
    {
      name: 'Fonds disponibles ($)',
      data: data.map(item => item.state.available_funds)
    },
    {
      name: 'Inventaire non vendu',
      data: data.map(item => item.state.unsold_inventory)
    },
    {
      name: 'Prix par trombone ($)',
      data: data.map(item => item.state.price_per_clip)
    },
    {
      name: 'Demande publique (%)',
      data: data.map(item => item.state.public_demand)
    },
    {
      name: 'Trombones par seconde',
      data: data.map(item => item.state.clips_per_second)
    },
    {
      name: 'Trombones en stock (inch)',
      data: data.map(item => item.state.inches)
    }
  ];

  const options: ApexOptions = {
    chart: {
      type: 'area',
      stacked: true,
      height: height,
      background: '#FFFFFF',
      zoom: {
        enabled: false
      },
      toolbar: {
        show: false
      }
    },
    colors: [
      '#FF6B6B', // Rouge vif
      '#4ECDC4', // Turquoise
      '#45B7D1', // Bleu ciel
      '#96CEB4', // Vert menthe
      '#FFEAA7', // Jaune doré
      '#DDA0DD'  // Prune
    ],
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth',
      width: 0
    },
    fill: {
      type: 'solid',
      opacity: 0.8
    },
    legend: {
      position: 'top',
      horizontalAlign: 'center',
      fontSize: '12px',
      markers: {
        size: 8
      },
      showForSingleSeries: false,
      showForNullSeries: false,
      onItemClick: {
        toggleDataSeries: true
      }
    },
    xaxis: {
      categories: categories,
      labels: {
        show: false
      },
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      }
    },
    yaxis: [
      {
        title: {
          text: '',
          style: {
            color: '#333333'
          }
        },
        labels: {
          formatter: function(val) {
            return val.toFixed(0);
          },
          style: {
            colors: '#6B7280',
            fontSize: '12px'
          }
        },
        axisBorder: {
          show: false
        }
      }
    ],
    tooltip: {
      shared: true,
      intersect: false,
      theme: 'light',
      style: {
        fontSize: '12px'
      },
      y: {
        formatter: function(val) {
          return val.toFixed(2);
        }
      }
    },
    title: {
      text: title,
      align: 'center',
      style: {
        fontSize: '16px',
        fontWeight: 'bold',
        color: '#333333'
      }
    },
    grid: {
      borderColor: '#E5E7EB',
      row: {
        colors: ['#F9FAFB', 'transparent'],
        opacity: 0.5
      },
      column: {
        colors: ['transparent', 'transparent'],
        opacity: 0
      },
      xaxis: {
        lines: {
          show: false
        }
      },
      yaxis: {
        lines: {
          show: true
        }
      }
    },
    responsive: [
      {
        breakpoint: 1024,
        options: {
          legend: {
            position: 'bottom'
          }
        }
      }
    ]
  };

  return (
    <div className="w-full">
      <ReactApexChart
        options={options}
        series={series}
        type="area"
        height={height}
      />
    </div>
  );
};

export default StackedAreaChart; 