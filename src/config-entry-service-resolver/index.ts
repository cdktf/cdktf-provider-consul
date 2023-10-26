/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs/resources/config_entry_service_resolver
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ConfigEntryServiceResolverConfig extends cdktf.TerraformMetaArguments {
  /**
  * Specifies the timeout duration for establishing new network connections to this service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs/resources/config_entry_service_resolver#connect_timeout ConfigEntryServiceResolver#connect_timeout}
  */
  readonly connectTimeout?: string;
  /**
  * Specifies a defined subset of service instances to use when no explicit subset is requested. If this parameter is not specified, Consul uses the unnamed default subset.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs/resources/config_entry_service_resolver#default_subset ConfigEntryServiceResolver#default_subset}
  */
  readonly defaultSubset?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs/resources/config_entry_service_resolver#id ConfigEntryServiceResolver#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specifies key-value pairs to add to the KV store.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs/resources/config_entry_service_resolver#meta ConfigEntryServiceResolver#meta}
  */
  readonly meta?: { [key: string]: string };
  /**
  * Specifies a name for the configuration entry.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs/resources/config_entry_service_resolver#name ConfigEntryServiceResolver#name}
  */
  readonly name: string;
  /**
  * Specifies the namespace that the service resolver applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs/resources/config_entry_service_resolver#namespace ConfigEntryServiceResolver#namespace}
  */
  readonly namespace?: string;
  /**
  * Specifies the admin partition that the service resolver applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs/resources/config_entry_service_resolver#partition ConfigEntryServiceResolver#partition}
  */
  readonly partition?: string;
  /**
  * Specifies the timeout duration for receiving an HTTP response from this service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs/resources/config_entry_service_resolver#request_timeout ConfigEntryServiceResolver#request_timeout}
  */
  readonly requestTimeout?: string;
  /**
  * failover block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs/resources/config_entry_service_resolver#failover ConfigEntryServiceResolver#failover}
  */
  readonly failover?: ConfigEntryServiceResolverFailover[] | cdktf.IResolvable;
  /**
  * load_balancer block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs/resources/config_entry_service_resolver#load_balancer ConfigEntryServiceResolver#load_balancer}
  */
  readonly loadBalancer?: ConfigEntryServiceResolverLoadBalancer[] | cdktf.IResolvable;
  /**
  * redirect block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs/resources/config_entry_service_resolver#redirect ConfigEntryServiceResolver#redirect}
  */
  readonly redirect?: ConfigEntryServiceResolverRedirect[] | cdktf.IResolvable;
  /**
  * subsets block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs/resources/config_entry_service_resolver#subsets ConfigEntryServiceResolver#subsets}
  */
  readonly subsets?: ConfigEntryServiceResolverSubsets[] | cdktf.IResolvable;
}
export interface ConfigEntryServiceResolverFailoverTargets {
  /**
  * Specifies the WAN federated datacenter to use for the failover target. If empty, the current datacenter is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs/resources/config_entry_service_resolver#datacenter ConfigEntryServiceResolver#datacenter}
  */
  readonly datacenter?: string;
  /**
  * Specifies the namespace to use for the failover target. If empty, the default namespace is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs/resources/config_entry_service_resolver#namespace ConfigEntryServiceResolver#namespace}
  */
  readonly namespace?: string;
  /**
  * Specifies the admin partition within the same datacenter to use for the failover target. If empty, the default partition is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs/resources/config_entry_service_resolver#partition ConfigEntryServiceResolver#partition}
  */
  readonly partition?: string;
  /**
  * Specifies the destination cluster peer to resolve the target service name from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs/resources/config_entry_service_resolver#peer ConfigEntryServiceResolver#peer}
  */
  readonly peer?: string;
  /**
  * Specifies the service name to use for the failover target. If empty, the current service name is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs/resources/config_entry_service_resolver#service ConfigEntryServiceResolver#service}
  */
  readonly service?: string;
  /**
  * Specifies the named subset to use for the failover target. If empty, the default subset for the requested service name is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs/resources/config_entry_service_resolver#service_subset ConfigEntryServiceResolver#service_subset}
  */
  readonly serviceSubset?: string;
}

export function configEntryServiceResolverFailoverTargetsToTerraform(struct?: ConfigEntryServiceResolverFailoverTargets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    datacenter: cdktf.stringToTerraform(struct!.datacenter),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    partition: cdktf.stringToTerraform(struct!.partition),
    peer: cdktf.stringToTerraform(struct!.peer),
    service: cdktf.stringToTerraform(struct!.service),
    service_subset: cdktf.stringToTerraform(struct!.serviceSubset),
  }
}

export class ConfigEntryServiceResolverFailoverTargetsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ConfigEntryServiceResolverFailoverTargets | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._datacenter !== undefined) {
      hasAnyValues = true;
      internalValueResult.datacenter = this._datacenter;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._partition !== undefined) {
      hasAnyValues = true;
      internalValueResult.partition = this._partition;
    }
    if (this._peer !== undefined) {
      hasAnyValues = true;
      internalValueResult.peer = this._peer;
    }
    if (this._service !== undefined) {
      hasAnyValues = true;
      internalValueResult.service = this._service;
    }
    if (this._serviceSubset !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceSubset = this._serviceSubset;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConfigEntryServiceResolverFailoverTargets | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._datacenter = undefined;
      this._namespace = undefined;
      this._partition = undefined;
      this._peer = undefined;
      this._service = undefined;
      this._serviceSubset = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._datacenter = value.datacenter;
      this._namespace = value.namespace;
      this._partition = value.partition;
      this._peer = value.peer;
      this._service = value.service;
      this._serviceSubset = value.serviceSubset;
    }
  }

  // datacenter - computed: false, optional: true, required: false
  private _datacenter?: string; 
  public get datacenter() {
    return this.getStringAttribute('datacenter');
  }
  public set datacenter(value: string) {
    this._datacenter = value;
  }
  public resetDatacenter() {
    this._datacenter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datacenterInput() {
    return this._datacenter;
  }

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // partition - computed: false, optional: true, required: false
  private _partition?: string; 
  public get partition() {
    return this.getStringAttribute('partition');
  }
  public set partition(value: string) {
    this._partition = value;
  }
  public resetPartition() {
    this._partition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionInput() {
    return this._partition;
  }

  // peer - computed: false, optional: true, required: false
  private _peer?: string; 
  public get peer() {
    return this.getStringAttribute('peer');
  }
  public set peer(value: string) {
    this._peer = value;
  }
  public resetPeer() {
    this._peer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerInput() {
    return this._peer;
  }

  // service - computed: false, optional: true, required: false
  private _service?: string; 
  public get service() {
    return this.getStringAttribute('service');
  }
  public set service(value: string) {
    this._service = value;
  }
  public resetService() {
    this._service = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service;
  }

  // service_subset - computed: false, optional: true, required: false
  private _serviceSubset?: string; 
  public get serviceSubset() {
    return this.getStringAttribute('service_subset');
  }
  public set serviceSubset(value: string) {
    this._serviceSubset = value;
  }
  public resetServiceSubset() {
    this._serviceSubset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceSubsetInput() {
    return this._serviceSubset;
  }
}

export class ConfigEntryServiceResolverFailoverTargetsList extends cdktf.ComplexList {
  public internalValue? : ConfigEntryServiceResolverFailoverTargets[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ConfigEntryServiceResolverFailoverTargetsOutputReference {
    return new ConfigEntryServiceResolverFailoverTargetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConfigEntryServiceResolverFailover {
  /**
  * Specifies an ordered list of datacenters at the failover location to attempt connections to during a failover scenario. When Consul cannot establish a connection with the first datacenter in the list, it proceeds sequentially until establishing a connection with another datacenter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs/resources/config_entry_service_resolver#datacenters ConfigEntryServiceResolver#datacenters}
  */
  readonly datacenters?: string[];
  /**
  * Specifies the namespace at the failover location where the failover services are deployed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs/resources/config_entry_service_resolver#namespace ConfigEntryServiceResolver#namespace}
  */
  readonly namespace?: string;
  /**
  * Specifies the sameness group at the failover location where the failover services are deployed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs/resources/config_entry_service_resolver#sameness_group ConfigEntryServiceResolver#sameness_group}
  */
  readonly samenessGroup?: string;
  /**
  * Specifies the name of the service to resolve at the failover location during a failover scenario.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs/resources/config_entry_service_resolver#service ConfigEntryServiceResolver#service}
  */
  readonly service?: string;
  /**
  * Specifies the name of a subset of service instances to resolve at the failover location during a failover scenario.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs/resources/config_entry_service_resolver#service_subset ConfigEntryServiceResolver#service_subset}
  */
  readonly serviceSubset?: string;
  /**
  * Name of subset.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs/resources/config_entry_service_resolver#subset_name ConfigEntryServiceResolver#subset_name}
  */
  readonly subsetName: string;
  /**
  * targets block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs/resources/config_entry_service_resolver#targets ConfigEntryServiceResolver#targets}
  */
  readonly targets?: ConfigEntryServiceResolverFailoverTargets[] | cdktf.IResolvable;
}

export function configEntryServiceResolverFailoverToTerraform(struct?: ConfigEntryServiceResolverFailover | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    datacenters: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.datacenters),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    sameness_group: cdktf.stringToTerraform(struct!.samenessGroup),
    service: cdktf.stringToTerraform(struct!.service),
    service_subset: cdktf.stringToTerraform(struct!.serviceSubset),
    subset_name: cdktf.stringToTerraform(struct!.subsetName),
    targets: cdktf.listMapper(configEntryServiceResolverFailoverTargetsToTerraform, true)(struct!.targets),
  }
}

export class ConfigEntryServiceResolverFailoverOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ConfigEntryServiceResolverFailover | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._datacenters !== undefined) {
      hasAnyValues = true;
      internalValueResult.datacenters = this._datacenters;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._samenessGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.samenessGroup = this._samenessGroup;
    }
    if (this._service !== undefined) {
      hasAnyValues = true;
      internalValueResult.service = this._service;
    }
    if (this._serviceSubset !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceSubset = this._serviceSubset;
    }
    if (this._subsetName !== undefined) {
      hasAnyValues = true;
      internalValueResult.subsetName = this._subsetName;
    }
    if (this._targets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.targets = this._targets?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConfigEntryServiceResolverFailover | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._datacenters = undefined;
      this._namespace = undefined;
      this._samenessGroup = undefined;
      this._service = undefined;
      this._serviceSubset = undefined;
      this._subsetName = undefined;
      this._targets.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._datacenters = value.datacenters;
      this._namespace = value.namespace;
      this._samenessGroup = value.samenessGroup;
      this._service = value.service;
      this._serviceSubset = value.serviceSubset;
      this._subsetName = value.subsetName;
      this._targets.internalValue = value.targets;
    }
  }

  // datacenters - computed: false, optional: true, required: false
  private _datacenters?: string[]; 
  public get datacenters() {
    return this.getListAttribute('datacenters');
  }
  public set datacenters(value: string[]) {
    this._datacenters = value;
  }
  public resetDatacenters() {
    this._datacenters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datacentersInput() {
    return this._datacenters;
  }

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // sameness_group - computed: false, optional: true, required: false
  private _samenessGroup?: string; 
  public get samenessGroup() {
    return this.getStringAttribute('sameness_group');
  }
  public set samenessGroup(value: string) {
    this._samenessGroup = value;
  }
  public resetSamenessGroup() {
    this._samenessGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samenessGroupInput() {
    return this._samenessGroup;
  }

  // service - computed: false, optional: true, required: false
  private _service?: string; 
  public get service() {
    return this.getStringAttribute('service');
  }
  public set service(value: string) {
    this._service = value;
  }
  public resetService() {
    this._service = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service;
  }

  // service_subset - computed: false, optional: true, required: false
  private _serviceSubset?: string; 
  public get serviceSubset() {
    return this.getStringAttribute('service_subset');
  }
  public set serviceSubset(value: string) {
    this._serviceSubset = value;
  }
  public resetServiceSubset() {
    this._serviceSubset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceSubsetInput() {
    return this._serviceSubset;
  }

  // subset_name - computed: false, optional: false, required: true
  private _subsetName?: string; 
  public get subsetName() {
    return this.getStringAttribute('subset_name');
  }
  public set subsetName(value: string) {
    this._subsetName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subsetNameInput() {
    return this._subsetName;
  }

  // targets - computed: false, optional: true, required: false
  private _targets = new ConfigEntryServiceResolverFailoverTargetsList(this, "targets", false);
  public get targets() {
    return this._targets;
  }
  public putTargets(value: ConfigEntryServiceResolverFailoverTargets[] | cdktf.IResolvable) {
    this._targets.internalValue = value;
  }
  public resetTargets() {
    this._targets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetsInput() {
    return this._targets.internalValue;
  }
}

export class ConfigEntryServiceResolverFailoverList extends cdktf.ComplexList {
  public internalValue? : ConfigEntryServiceResolverFailover[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ConfigEntryServiceResolverFailoverOutputReference {
    return new ConfigEntryServiceResolverFailoverOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfig {
  /**
  * Specifies the path to set for the cookie.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs/resources/config_entry_service_resolver#path ConfigEntryServiceResolver#path}
  */
  readonly path?: string;
  /**
  * Directs Consul to generate a session cookie with no expiration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs/resources/config_entry_service_resolver#session ConfigEntryServiceResolver#session}
  */
  readonly session?: boolean | cdktf.IResolvable;
  /**
  * Specifies the TTL for generated cookies. Cannot be specified for session cookies.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs/resources/config_entry_service_resolver#ttl ConfigEntryServiceResolver#ttl}
  */
  readonly ttl?: string;
}

export function configEntryServiceResolverLoadBalancerHashPoliciesCookieConfigToTerraform(struct?: ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    path: cdktf.stringToTerraform(struct!.path),
    session: cdktf.booleanToTerraform(struct!.session),
    ttl: cdktf.stringToTerraform(struct!.ttl),
  }
}

export class ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._session !== undefined) {
      hasAnyValues = true;
      internalValueResult.session = this._session;
    }
    if (this._ttl !== undefined) {
      hasAnyValues = true;
      internalValueResult.ttl = this._ttl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._path = undefined;
      this._session = undefined;
      this._ttl = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._path = value.path;
      this._session = value.session;
      this._ttl = value.ttl;
    }
  }

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // session - computed: false, optional: true, required: false
  private _session?: boolean | cdktf.IResolvable; 
  public get session() {
    return this.getBooleanAttribute('session');
  }
  public set session(value: boolean | cdktf.IResolvable) {
    this._session = value;
  }
  public resetSession() {
    this._session = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionInput() {
    return this._session;
  }

  // ttl - computed: false, optional: true, required: false
  private _ttl?: string; 
  public get ttl() {
    return this.getStringAttribute('ttl');
  }
  public set ttl(value: string) {
    this._ttl = value;
  }
  public resetTtl() {
    this._ttl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlInput() {
    return this._ttl;
  }
}

export class ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigList extends cdktf.ComplexList {
  public internalValue? : ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfig[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference {
    return new ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConfigEntryServiceResolverLoadBalancerHashPolicies {
  /**
  * Specifies the attribute type to hash on. You cannot specify the Field parameter if SourceIP is also configured.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs/resources/config_entry_service_resolver#field ConfigEntryServiceResolver#field}
  */
  readonly field?: string;
  /**
  * Specifies the value to hash, such as a header name, cookie name, or a URL query parameter name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs/resources/config_entry_service_resolver#field_value ConfigEntryServiceResolver#field_value}
  */
  readonly fieldValue?: string;
  /**
  * Determines if the hash type should be source IP address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs/resources/config_entry_service_resolver#source_ip ConfigEntryServiceResolver#source_ip}
  */
  readonly sourceIp?: boolean | cdktf.IResolvable;
  /**
  * Determines if Consul should stop computing the hash when multiple hash policies are present.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs/resources/config_entry_service_resolver#terminal ConfigEntryServiceResolver#terminal}
  */
  readonly terminal?: boolean | cdktf.IResolvable;
  /**
  * cookie_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs/resources/config_entry_service_resolver#cookie_config ConfigEntryServiceResolver#cookie_config}
  */
  readonly cookieConfig?: ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfig[] | cdktf.IResolvable;
}

export function configEntryServiceResolverLoadBalancerHashPoliciesToTerraform(struct?: ConfigEntryServiceResolverLoadBalancerHashPolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field: cdktf.stringToTerraform(struct!.field),
    field_value: cdktf.stringToTerraform(struct!.fieldValue),
    source_ip: cdktf.booleanToTerraform(struct!.sourceIp),
    terminal: cdktf.booleanToTerraform(struct!.terminal),
    cookie_config: cdktf.listMapper(configEntryServiceResolverLoadBalancerHashPoliciesCookieConfigToTerraform, true)(struct!.cookieConfig),
  }
}

export class ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ConfigEntryServiceResolverLoadBalancerHashPolicies | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._field !== undefined) {
      hasAnyValues = true;
      internalValueResult.field = this._field;
    }
    if (this._fieldValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldValue = this._fieldValue;
    }
    if (this._sourceIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceIp = this._sourceIp;
    }
    if (this._terminal !== undefined) {
      hasAnyValues = true;
      internalValueResult.terminal = this._terminal;
    }
    if (this._cookieConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cookieConfig = this._cookieConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConfigEntryServiceResolverLoadBalancerHashPolicies | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._field = undefined;
      this._fieldValue = undefined;
      this._sourceIp = undefined;
      this._terminal = undefined;
      this._cookieConfig.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._field = value.field;
      this._fieldValue = value.fieldValue;
      this._sourceIp = value.sourceIp;
      this._terminal = value.terminal;
      this._cookieConfig.internalValue = value.cookieConfig;
    }
  }

  // field - computed: false, optional: true, required: false
  private _field?: string; 
  public get field() {
    return this.getStringAttribute('field');
  }
  public set field(value: string) {
    this._field = value;
  }
  public resetField() {
    this._field = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldInput() {
    return this._field;
  }

  // field_value - computed: false, optional: true, required: false
  private _fieldValue?: string; 
  public get fieldValue() {
    return this.getStringAttribute('field_value');
  }
  public set fieldValue(value: string) {
    this._fieldValue = value;
  }
  public resetFieldValue() {
    this._fieldValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldValueInput() {
    return this._fieldValue;
  }

  // source_ip - computed: false, optional: true, required: false
  private _sourceIp?: boolean | cdktf.IResolvable; 
  public get sourceIp() {
    return this.getBooleanAttribute('source_ip');
  }
  public set sourceIp(value: boolean | cdktf.IResolvable) {
    this._sourceIp = value;
  }
  public resetSourceIp() {
    this._sourceIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceIpInput() {
    return this._sourceIp;
  }

  // terminal - computed: false, optional: true, required: false
  private _terminal?: boolean | cdktf.IResolvable; 
  public get terminal() {
    return this.getBooleanAttribute('terminal');
  }
  public set terminal(value: boolean | cdktf.IResolvable) {
    this._terminal = value;
  }
  public resetTerminal() {
    this._terminal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get terminalInput() {
    return this._terminal;
  }

  // cookie_config - computed: false, optional: true, required: false
  private _cookieConfig = new ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigList(this, "cookie_config", true);
  public get cookieConfig() {
    return this._cookieConfig;
  }
  public putCookieConfig(value: ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfig[] | cdktf.IResolvable) {
    this._cookieConfig.internalValue = value;
  }
  public resetCookieConfig() {
    this._cookieConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookieConfigInput() {
    return this._cookieConfig.internalValue;
  }
}

export class ConfigEntryServiceResolverLoadBalancerHashPoliciesList extends cdktf.ComplexList {
  public internalValue? : ConfigEntryServiceResolverLoadBalancerHashPolicies[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference {
    return new ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConfigEntryServiceResolverLoadBalancerLeastRequestConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs/resources/config_entry_service_resolver#choice_count ConfigEntryServiceResolver#choice_count}
  */
  readonly choiceCount?: number;
}

export function configEntryServiceResolverLoadBalancerLeastRequestConfigToTerraform(struct?: ConfigEntryServiceResolverLoadBalancerLeastRequestConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    choice_count: cdktf.numberToTerraform(struct!.choiceCount),
  }
}

export class ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ConfigEntryServiceResolverLoadBalancerLeastRequestConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._choiceCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.choiceCount = this._choiceCount;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConfigEntryServiceResolverLoadBalancerLeastRequestConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._choiceCount = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._choiceCount = value.choiceCount;
    }
  }

  // choice_count - computed: false, optional: true, required: false
  private _choiceCount?: number; 
  public get choiceCount() {
    return this.getNumberAttribute('choice_count');
  }
  public set choiceCount(value: number) {
    this._choiceCount = value;
  }
  public resetChoiceCount() {
    this._choiceCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get choiceCountInput() {
    return this._choiceCount;
  }
}

export class ConfigEntryServiceResolverLoadBalancerLeastRequestConfigList extends cdktf.ComplexList {
  public internalValue? : ConfigEntryServiceResolverLoadBalancerLeastRequestConfig[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference {
    return new ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConfigEntryServiceResolverLoadBalancerRingHashConfig {
  /**
  * Determines the maximum number of entries in the hash ring.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs/resources/config_entry_service_resolver#maximum_ring_size ConfigEntryServiceResolver#maximum_ring_size}
  */
  readonly maximumRingSize?: number;
  /**
  * Determines the minimum number of entries in the hash ring.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs/resources/config_entry_service_resolver#minimum_ring_size ConfigEntryServiceResolver#minimum_ring_size}
  */
  readonly minimumRingSize?: number;
}

export function configEntryServiceResolverLoadBalancerRingHashConfigToTerraform(struct?: ConfigEntryServiceResolverLoadBalancerRingHashConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    maximum_ring_size: cdktf.numberToTerraform(struct!.maximumRingSize),
    minimum_ring_size: cdktf.numberToTerraform(struct!.minimumRingSize),
  }
}

export class ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ConfigEntryServiceResolverLoadBalancerRingHashConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maximumRingSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumRingSize = this._maximumRingSize;
    }
    if (this._minimumRingSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.minimumRingSize = this._minimumRingSize;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConfigEntryServiceResolverLoadBalancerRingHashConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maximumRingSize = undefined;
      this._minimumRingSize = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maximumRingSize = value.maximumRingSize;
      this._minimumRingSize = value.minimumRingSize;
    }
  }

  // maximum_ring_size - computed: false, optional: true, required: false
  private _maximumRingSize?: number; 
  public get maximumRingSize() {
    return this.getNumberAttribute('maximum_ring_size');
  }
  public set maximumRingSize(value: number) {
    this._maximumRingSize = value;
  }
  public resetMaximumRingSize() {
    this._maximumRingSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumRingSizeInput() {
    return this._maximumRingSize;
  }

  // minimum_ring_size - computed: false, optional: true, required: false
  private _minimumRingSize?: number; 
  public get minimumRingSize() {
    return this.getNumberAttribute('minimum_ring_size');
  }
  public set minimumRingSize(value: number) {
    this._minimumRingSize = value;
  }
  public resetMinimumRingSize() {
    this._minimumRingSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumRingSizeInput() {
    return this._minimumRingSize;
  }
}

export class ConfigEntryServiceResolverLoadBalancerRingHashConfigList extends cdktf.ComplexList {
  public internalValue? : ConfigEntryServiceResolverLoadBalancerRingHashConfig[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference {
    return new ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConfigEntryServiceResolverLoadBalancer {
  /**
  * Specifies the type of load balancing policy for selecting a host. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs/resources/config_entry_service_resolver#policy ConfigEntryServiceResolver#policy}
  */
  readonly policy?: string;
  /**
  * hash_policies block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs/resources/config_entry_service_resolver#hash_policies ConfigEntryServiceResolver#hash_policies}
  */
  readonly hashPolicies?: ConfigEntryServiceResolverLoadBalancerHashPolicies[] | cdktf.IResolvable;
  /**
  * least_request_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs/resources/config_entry_service_resolver#least_request_config ConfigEntryServiceResolver#least_request_config}
  */
  readonly leastRequestConfig?: ConfigEntryServiceResolverLoadBalancerLeastRequestConfig[] | cdktf.IResolvable;
  /**
  * ring_hash_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs/resources/config_entry_service_resolver#ring_hash_config ConfigEntryServiceResolver#ring_hash_config}
  */
  readonly ringHashConfig?: ConfigEntryServiceResolverLoadBalancerRingHashConfig[] | cdktf.IResolvable;
}

export function configEntryServiceResolverLoadBalancerToTerraform(struct?: ConfigEntryServiceResolverLoadBalancer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    policy: cdktf.stringToTerraform(struct!.policy),
    hash_policies: cdktf.listMapper(configEntryServiceResolverLoadBalancerHashPoliciesToTerraform, true)(struct!.hashPolicies),
    least_request_config: cdktf.listMapper(configEntryServiceResolverLoadBalancerLeastRequestConfigToTerraform, true)(struct!.leastRequestConfig),
    ring_hash_config: cdktf.listMapper(configEntryServiceResolverLoadBalancerRingHashConfigToTerraform, true)(struct!.ringHashConfig),
  }
}

export class ConfigEntryServiceResolverLoadBalancerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ConfigEntryServiceResolverLoadBalancer | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._policy !== undefined) {
      hasAnyValues = true;
      internalValueResult.policy = this._policy;
    }
    if (this._hashPolicies?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hashPolicies = this._hashPolicies?.internalValue;
    }
    if (this._leastRequestConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.leastRequestConfig = this._leastRequestConfig?.internalValue;
    }
    if (this._ringHashConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ringHashConfig = this._ringHashConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConfigEntryServiceResolverLoadBalancer | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._policy = undefined;
      this._hashPolicies.internalValue = undefined;
      this._leastRequestConfig.internalValue = undefined;
      this._ringHashConfig.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._policy = value.policy;
      this._hashPolicies.internalValue = value.hashPolicies;
      this._leastRequestConfig.internalValue = value.leastRequestConfig;
      this._ringHashConfig.internalValue = value.ringHashConfig;
    }
  }

  // policy - computed: false, optional: true, required: false
  private _policy?: string; 
  public get policy() {
    return this.getStringAttribute('policy');
  }
  public set policy(value: string) {
    this._policy = value;
  }
  public resetPolicy() {
    this._policy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyInput() {
    return this._policy;
  }

  // hash_policies - computed: false, optional: true, required: false
  private _hashPolicies = new ConfigEntryServiceResolverLoadBalancerHashPoliciesList(this, "hash_policies", false);
  public get hashPolicies() {
    return this._hashPolicies;
  }
  public putHashPolicies(value: ConfigEntryServiceResolverLoadBalancerHashPolicies[] | cdktf.IResolvable) {
    this._hashPolicies.internalValue = value;
  }
  public resetHashPolicies() {
    this._hashPolicies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hashPoliciesInput() {
    return this._hashPolicies.internalValue;
  }

  // least_request_config - computed: false, optional: true, required: false
  private _leastRequestConfig = new ConfigEntryServiceResolverLoadBalancerLeastRequestConfigList(this, "least_request_config", true);
  public get leastRequestConfig() {
    return this._leastRequestConfig;
  }
  public putLeastRequestConfig(value: ConfigEntryServiceResolverLoadBalancerLeastRequestConfig[] | cdktf.IResolvable) {
    this._leastRequestConfig.internalValue = value;
  }
  public resetLeastRequestConfig() {
    this._leastRequestConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get leastRequestConfigInput() {
    return this._leastRequestConfig.internalValue;
  }

  // ring_hash_config - computed: false, optional: true, required: false
  private _ringHashConfig = new ConfigEntryServiceResolverLoadBalancerRingHashConfigList(this, "ring_hash_config", true);
  public get ringHashConfig() {
    return this._ringHashConfig;
  }
  public putRingHashConfig(value: ConfigEntryServiceResolverLoadBalancerRingHashConfig[] | cdktf.IResolvable) {
    this._ringHashConfig.internalValue = value;
  }
  public resetRingHashConfig() {
    this._ringHashConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ringHashConfigInput() {
    return this._ringHashConfig.internalValue;
  }
}

export class ConfigEntryServiceResolverLoadBalancerList extends cdktf.ComplexList {
  public internalValue? : ConfigEntryServiceResolverLoadBalancer[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ConfigEntryServiceResolverLoadBalancerOutputReference {
    return new ConfigEntryServiceResolverLoadBalancerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConfigEntryServiceResolverRedirect {
  /**
  * Specifies the datacenter at the redirect’s destination that resolves local upstream requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs/resources/config_entry_service_resolver#datacenter ConfigEntryServiceResolver#datacenter}
  */
  readonly datacenter?: string;
  /**
  * Specifies the namespace at the redirect’s destination that resolves local upstream requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs/resources/config_entry_service_resolver#namespace ConfigEntryServiceResolver#namespace}
  */
  readonly namespace?: string;
  /**
  * Specifies the admin partition at the redirect’s destination that resolves local upstream requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs/resources/config_entry_service_resolver#partition ConfigEntryServiceResolver#partition}
  */
  readonly partition?: string;
  /**
  * Specifies the cluster with an active cluster peering connection at the redirect’s destination that resolves local upstream requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs/resources/config_entry_service_resolver#peer ConfigEntryServiceResolver#peer}
  */
  readonly peer?: string;
  /**
  * Specifies the sameness group at the redirect’s destination that resolves local upstream requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs/resources/config_entry_service_resolver#sameness_group ConfigEntryServiceResolver#sameness_group}
  */
  readonly samenessGroup?: string;
  /**
  * Specifies the name of a service at the redirect’s destination that resolves local upstream requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs/resources/config_entry_service_resolver#service ConfigEntryServiceResolver#service}
  */
  readonly service?: string;
  /**
  * Specifies the name of a subset of services at the redirect’s destination that resolves local upstream requests. If empty, the default subset is used. If specified, you must also specify at least one of the following in the same Redirect map: Service, Namespace, andDatacenter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs/resources/config_entry_service_resolver#service_subset ConfigEntryServiceResolver#service_subset}
  */
  readonly serviceSubset?: string;
}

export function configEntryServiceResolverRedirectToTerraform(struct?: ConfigEntryServiceResolverRedirect | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    datacenter: cdktf.stringToTerraform(struct!.datacenter),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    partition: cdktf.stringToTerraform(struct!.partition),
    peer: cdktf.stringToTerraform(struct!.peer),
    sameness_group: cdktf.stringToTerraform(struct!.samenessGroup),
    service: cdktf.stringToTerraform(struct!.service),
    service_subset: cdktf.stringToTerraform(struct!.serviceSubset),
  }
}

export class ConfigEntryServiceResolverRedirectOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ConfigEntryServiceResolverRedirect | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._datacenter !== undefined) {
      hasAnyValues = true;
      internalValueResult.datacenter = this._datacenter;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._partition !== undefined) {
      hasAnyValues = true;
      internalValueResult.partition = this._partition;
    }
    if (this._peer !== undefined) {
      hasAnyValues = true;
      internalValueResult.peer = this._peer;
    }
    if (this._samenessGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.samenessGroup = this._samenessGroup;
    }
    if (this._service !== undefined) {
      hasAnyValues = true;
      internalValueResult.service = this._service;
    }
    if (this._serviceSubset !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceSubset = this._serviceSubset;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConfigEntryServiceResolverRedirect | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._datacenter = undefined;
      this._namespace = undefined;
      this._partition = undefined;
      this._peer = undefined;
      this._samenessGroup = undefined;
      this._service = undefined;
      this._serviceSubset = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._datacenter = value.datacenter;
      this._namespace = value.namespace;
      this._partition = value.partition;
      this._peer = value.peer;
      this._samenessGroup = value.samenessGroup;
      this._service = value.service;
      this._serviceSubset = value.serviceSubset;
    }
  }

  // datacenter - computed: false, optional: true, required: false
  private _datacenter?: string; 
  public get datacenter() {
    return this.getStringAttribute('datacenter');
  }
  public set datacenter(value: string) {
    this._datacenter = value;
  }
  public resetDatacenter() {
    this._datacenter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datacenterInput() {
    return this._datacenter;
  }

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // partition - computed: false, optional: true, required: false
  private _partition?: string; 
  public get partition() {
    return this.getStringAttribute('partition');
  }
  public set partition(value: string) {
    this._partition = value;
  }
  public resetPartition() {
    this._partition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionInput() {
    return this._partition;
  }

  // peer - computed: false, optional: true, required: false
  private _peer?: string; 
  public get peer() {
    return this.getStringAttribute('peer');
  }
  public set peer(value: string) {
    this._peer = value;
  }
  public resetPeer() {
    this._peer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerInput() {
    return this._peer;
  }

  // sameness_group - computed: false, optional: true, required: false
  private _samenessGroup?: string; 
  public get samenessGroup() {
    return this.getStringAttribute('sameness_group');
  }
  public set samenessGroup(value: string) {
    this._samenessGroup = value;
  }
  public resetSamenessGroup() {
    this._samenessGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samenessGroupInput() {
    return this._samenessGroup;
  }

  // service - computed: false, optional: true, required: false
  private _service?: string; 
  public get service() {
    return this.getStringAttribute('service');
  }
  public set service(value: string) {
    this._service = value;
  }
  public resetService() {
    this._service = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service;
  }

  // service_subset - computed: false, optional: true, required: false
  private _serviceSubset?: string; 
  public get serviceSubset() {
    return this.getStringAttribute('service_subset');
  }
  public set serviceSubset(value: string) {
    this._serviceSubset = value;
  }
  public resetServiceSubset() {
    this._serviceSubset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceSubsetInput() {
    return this._serviceSubset;
  }
}

export class ConfigEntryServiceResolverRedirectList extends cdktf.ComplexList {
  public internalValue? : ConfigEntryServiceResolverRedirect[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ConfigEntryServiceResolverRedirectOutputReference {
    return new ConfigEntryServiceResolverRedirectOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConfigEntryServiceResolverSubsets {
  /**
  * Specifies an expression that filters the DNS elements of service instances that belong to the subset. If empty, all healthy instances of a service are returned.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs/resources/config_entry_service_resolver#filter ConfigEntryServiceResolver#filter}
  */
  readonly filter: string;
  /**
  * Name of subset.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs/resources/config_entry_service_resolver#name ConfigEntryServiceResolver#name}
  */
  readonly name: string;
  /**
  * Determines if instances that return a warning from a health check are allowed to resolve a request. When set to false, instances with passing and warning states are considered healthy. When set to true, only instances with a passing health check state are considered healthy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs/resources/config_entry_service_resolver#only_passing ConfigEntryServiceResolver#only_passing}
  */
  readonly onlyPassing: boolean | cdktf.IResolvable;
}

export function configEntryServiceResolverSubsetsToTerraform(struct?: ConfigEntryServiceResolverSubsets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    filter: cdktf.stringToTerraform(struct!.filter),
    name: cdktf.stringToTerraform(struct!.name),
    only_passing: cdktf.booleanToTerraform(struct!.onlyPassing),
  }
}

export class ConfigEntryServiceResolverSubsetsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ConfigEntryServiceResolverSubsets | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._filter !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter = this._filter;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._onlyPassing !== undefined) {
      hasAnyValues = true;
      internalValueResult.onlyPassing = this._onlyPassing;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConfigEntryServiceResolverSubsets | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._filter = undefined;
      this._name = undefined;
      this._onlyPassing = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._filter = value.filter;
      this._name = value.name;
      this._onlyPassing = value.onlyPassing;
    }
  }

  // filter - computed: false, optional: false, required: true
  private _filter?: string; 
  public get filter() {
    return this.getStringAttribute('filter');
  }
  public set filter(value: string) {
    this._filter = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // only_passing - computed: false, optional: false, required: true
  private _onlyPassing?: boolean | cdktf.IResolvable; 
  public get onlyPassing() {
    return this.getBooleanAttribute('only_passing');
  }
  public set onlyPassing(value: boolean | cdktf.IResolvable) {
    this._onlyPassing = value;
  }
  // Temporarily expose input value. Use with caution.
  public get onlyPassingInput() {
    return this._onlyPassing;
  }
}

export class ConfigEntryServiceResolverSubsetsList extends cdktf.ComplexList {
  public internalValue? : ConfigEntryServiceResolverSubsets[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ConfigEntryServiceResolverSubsetsOutputReference {
    return new ConfigEntryServiceResolverSubsetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs/resources/config_entry_service_resolver consul_config_entry_service_resolver}
*/
export class ConfigEntryServiceResolver extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "consul_config_entry_service_resolver";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ConfigEntryServiceResolver resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ConfigEntryServiceResolver to import
  * @param importFromId The id of the existing ConfigEntryServiceResolver that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs/resources/config_entry_service_resolver#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ConfigEntryServiceResolver to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "consul_config_entry_service_resolver", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs/resources/config_entry_service_resolver consul_config_entry_service_resolver} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ConfigEntryServiceResolverConfig
  */
  public constructor(scope: Construct, id: string, config: ConfigEntryServiceResolverConfig) {
    super(scope, id, {
      terraformResourceType: 'consul_config_entry_service_resolver',
      terraformGeneratorMetadata: {
        providerName: 'consul',
        providerVersion: '2.19.0',
        providerVersionConstraint: '~> 2.16'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._connectTimeout = config.connectTimeout;
    this._defaultSubset = config.defaultSubset;
    this._id = config.id;
    this._meta = config.meta;
    this._name = config.name;
    this._namespace = config.namespace;
    this._partition = config.partition;
    this._requestTimeout = config.requestTimeout;
    this._failover.internalValue = config.failover;
    this._loadBalancer.internalValue = config.loadBalancer;
    this._redirect.internalValue = config.redirect;
    this._subsets.internalValue = config.subsets;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // connect_timeout - computed: false, optional: true, required: false
  private _connectTimeout?: string; 
  public get connectTimeout() {
    return this.getStringAttribute('connect_timeout');
  }
  public set connectTimeout(value: string) {
    this._connectTimeout = value;
  }
  public resetConnectTimeout() {
    this._connectTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectTimeoutInput() {
    return this._connectTimeout;
  }

  // default_subset - computed: false, optional: true, required: false
  private _defaultSubset?: string; 
  public get defaultSubset() {
    return this.getStringAttribute('default_subset');
  }
  public set defaultSubset(value: string) {
    this._defaultSubset = value;
  }
  public resetDefaultSubset() {
    this._defaultSubset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultSubsetInput() {
    return this._defaultSubset;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // meta - computed: false, optional: true, required: false
  private _meta?: { [key: string]: string }; 
  public get meta() {
    return this.getStringMapAttribute('meta');
  }
  public set meta(value: { [key: string]: string }) {
    this._meta = value;
  }
  public resetMeta() {
    this._meta = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metaInput() {
    return this._meta;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // partition - computed: false, optional: true, required: false
  private _partition?: string; 
  public get partition() {
    return this.getStringAttribute('partition');
  }
  public set partition(value: string) {
    this._partition = value;
  }
  public resetPartition() {
    this._partition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionInput() {
    return this._partition;
  }

  // request_timeout - computed: false, optional: true, required: false
  private _requestTimeout?: string; 
  public get requestTimeout() {
    return this.getStringAttribute('request_timeout');
  }
  public set requestTimeout(value: string) {
    this._requestTimeout = value;
  }
  public resetRequestTimeout() {
    this._requestTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestTimeoutInput() {
    return this._requestTimeout;
  }

  // failover - computed: false, optional: true, required: false
  private _failover = new ConfigEntryServiceResolverFailoverList(this, "failover", true);
  public get failover() {
    return this._failover;
  }
  public putFailover(value: ConfigEntryServiceResolverFailover[] | cdktf.IResolvable) {
    this._failover.internalValue = value;
  }
  public resetFailover() {
    this._failover.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failoverInput() {
    return this._failover.internalValue;
  }

  // load_balancer - computed: false, optional: true, required: false
  private _loadBalancer = new ConfigEntryServiceResolverLoadBalancerList(this, "load_balancer", true);
  public get loadBalancer() {
    return this._loadBalancer;
  }
  public putLoadBalancer(value: ConfigEntryServiceResolverLoadBalancer[] | cdktf.IResolvable) {
    this._loadBalancer.internalValue = value;
  }
  public resetLoadBalancer() {
    this._loadBalancer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancerInput() {
    return this._loadBalancer.internalValue;
  }

  // redirect - computed: false, optional: true, required: false
  private _redirect = new ConfigEntryServiceResolverRedirectList(this, "redirect", true);
  public get redirect() {
    return this._redirect;
  }
  public putRedirect(value: ConfigEntryServiceResolverRedirect[] | cdktf.IResolvable) {
    this._redirect.internalValue = value;
  }
  public resetRedirect() {
    this._redirect.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectInput() {
    return this._redirect.internalValue;
  }

  // subsets - computed: false, optional: true, required: false
  private _subsets = new ConfigEntryServiceResolverSubsetsList(this, "subsets", true);
  public get subsets() {
    return this._subsets;
  }
  public putSubsets(value: ConfigEntryServiceResolverSubsets[] | cdktf.IResolvable) {
    this._subsets.internalValue = value;
  }
  public resetSubsets() {
    this._subsets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subsetsInput() {
    return this._subsets.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      connect_timeout: cdktf.stringToTerraform(this._connectTimeout),
      default_subset: cdktf.stringToTerraform(this._defaultSubset),
      id: cdktf.stringToTerraform(this._id),
      meta: cdktf.hashMapper(cdktf.stringToTerraform)(this._meta),
      name: cdktf.stringToTerraform(this._name),
      namespace: cdktf.stringToTerraform(this._namespace),
      partition: cdktf.stringToTerraform(this._partition),
      request_timeout: cdktf.stringToTerraform(this._requestTimeout),
      failover: cdktf.listMapper(configEntryServiceResolverFailoverToTerraform, true)(this._failover.internalValue),
      load_balancer: cdktf.listMapper(configEntryServiceResolverLoadBalancerToTerraform, true)(this._loadBalancer.internalValue),
      redirect: cdktf.listMapper(configEntryServiceResolverRedirectToTerraform, true)(this._redirect.internalValue),
      subsets: cdktf.listMapper(configEntryServiceResolverSubsetsToTerraform, true)(this._subsets.internalValue),
    };
  }
}
