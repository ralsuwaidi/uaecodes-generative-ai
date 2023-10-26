"use client";

import { ChevronRightIcon } from "@heroicons/react/20/solid";
import { useEffect, useState } from "react";

interface Statuses {
  offline: string;
  online: string;
  procesing: string;
}

interface Environments {
  Preview: string;
  Production: string;
}

interface Deployment {
  id: number;
  href: string;
  projectName: string;
  teamName: string;
  status: keyof Statuses;
  statusText: string;
  description: string;
  environment: keyof Environments;
}

const statuses: Statuses = {
  offline: "text-gray-500 bg-gray-100/10",
  online: "text-green-400 bg-green-400/10",
  procesing: "text-yellow-400 bg-yellow-400/10",
};

const deployments: Deployment[] = [
  {
    id: 1,
    href: "#",
    projectName: "ios-app",
    teamName: "Processing data",
    status: "offline",
    statusText: "Initiated 1m 32s ago",
    description: "Deploys from GitHub",
    environment: "Preview",
  },
  {
    id: 2,
    href: "#",
    projectName: "mobile-api",
    teamName: "Tuning hyperparameters",
    status: "offline",
    statusText: "Deployed 3m ago",
    description: "Deploys from GitHub",
    environment: "Production",
  },
  {
    id: 3,
    href: "#",
    projectName: "",
    teamName: "Validating model",
    status: "offline",
    statusText: "Deployed 3h ago",
    description: "Deploys from GitHub",
    environment: "Preview",
  },
  {
    id: 4,
    href: "#",
    projectName: "",
    teamName: "Deploying AI",
    status: "offline",
    statusText: "Deployed 3h ago",
    description: "Deploys from GitHub",
    environment: "Preview",
  },
];

function classNames(...classes: (string | undefined)[]): string {
  return classes.filter(Boolean).join(" ");
}

export default function AIProcessingList() {
  const [deploymentStatuses, setDeploymentStatuses] = useState<Deployment[]>(
    deployments
  );

  useEffect(() => {
    // Loop over each Deployment
    for (let i = 0; i < deploymentStatuses.length; i++) {
      // Initiate a new timeout for each item
      setTimeout(() => {
        // Make a copy of the deployments array
        const newDeployments = [...deploymentStatuses];

        // Only update status if it hasn't been updated yet
        if (newDeployments[i].status === deployments[i].status) {
          // The status progresses through the keys of the statuses object.
          // We pick the index based on the current status.
          const keys = Object.keys(statuses);
          const currentStatusIndex = keys.indexOf(deploymentStatuses[i].status);
          const nextStatusIndex = (currentStatusIndex + 1) % keys.length;

          // Update the status of the specific deployment
          newDeployments[i].status = keys[nextStatusIndex] as keyof Statuses;

          // Update the state
          setDeploymentStatuses(newDeployments);
        }
      }, 1000 * (i + 1)); // Increase delay by 1 second for each subsequent item
    }
  }, []);

  return (
    <ul role="list" className="divide-y divide-white/5 max-w-3xl mx-auto">
      {deploymentStatuses.map((deployment) => (
        <li
          key={deployment.id}
          className="relative flex items-center space-x-4 py-4"
        >
          <div className="min-w-0 flex-auto">
            <div className="flex items-center gap-x-3">
              <div
                className={classNames(
                  statuses[deployment.status],
                  "flex-none rounded-full p-1"
                )}
              >
                <div className="h-2 w-2 rounded-full bg-current" />
              </div>
              <h2 className="min-w-0 text-sm font-semibold leading-6 text-white">
                <a href={deployment.href} className="flex gap-x-2">
                  <span className="truncate">{deployment.teamName}</span>
                  <span className="absolute inset-0" />
                </a>
              </h2>
            </div>
          </div>

          {/* <ChevronRightIcon
            className="h-5 w-5 flex-none text-gray-400"
            aria-hidden="true"
          /> */}
        </li>
      ))}
    </ul>
  );
}
