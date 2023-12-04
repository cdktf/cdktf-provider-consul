/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_defaults
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ConfigEntryServiceDefaultsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Specifies the strategy for allocating inbound connections to the service across Envoy proxy threads.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_defaults#balance_inbound_connections ConfigEntryServiceDefaults#balance_inbound_connections}
  */
  readonly balanceInboundConnections?: string;
  /**
  * Specifies the TLS server name indication (SNI) when federating with an external system.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_defaults#external_sni ConfigEntryServiceDefaults#external_sni}
  */
  readonly externalSni?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_defaults#id ConfigEntryServiceDefaults#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specifies the number of milliseconds allowed for establishing connections to the local application instance before timing out.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_defaults#local_connect_timeout_ms ConfigEntryServiceDefaults#local_connect_timeout_ms}
  */
  readonly localConnectTimeoutMs?: number;
  /**
  * Specifies the timeout for HTTP requests to the local application instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_defaults#local_request_timeout_ms ConfigEntryServiceDefaults#local_request_timeout_ms}
  */
  readonly localRequestTimeoutMs?: number;
  /**
  * Specifies the maximum number of concurrent inbound connections to each service instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_defaults#max_inbound_connections ConfigEntryServiceDefaults#max_inbound_connections}
  */
  readonly maxInboundConnections?: number;
  /**
  * Specifies a set of custom key-value pairs to add to the Consul KV store.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_defaults#meta ConfigEntryServiceDefaults#meta}
  */
  readonly meta?: { [key: string]: string };
  /**
  * Specifies a mode for how the service directs inbound and outbound traffic.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_defaults#mode ConfigEntryServiceDefaults#mode}
  */
  readonly mode?: string;
  /**
  * Controls whether mutual TLS is required for incoming connections to this service. This setting is only supported for services with transparent proxy enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_defaults#mutual_tls_mode ConfigEntryServiceDefaults#mutual_tls_mode}
  */
  readonly mutualTlsMode?: string;
  /**
  * Specifies the name of the service you are setting the defaults for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_defaults#name ConfigEntryServiceDefaults#name}
  */
  readonly name: string;
  /**
  * Specifies the Consul namespace that the configuration entry applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_defaults#namespace ConfigEntryServiceDefaults#namespace}
  */
  readonly namespace?: string;
  /**
  * Specifies the name of the name of the Consul admin partition that the configuration entry applies to. Refer to Admin Partitions for additional information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_defaults#partition ConfigEntryServiceDefaults#partition}
  */
  readonly partition?: string;
  /**
  * Specifies the default protocol for the service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_defaults#protocol ConfigEntryServiceDefaults#protocol}
  */
  readonly protocol: string;
  /**
  * destination block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_defaults#destination ConfigEntryServiceDefaults#destination}
  */
  readonly destination?: ConfigEntryServiceDefaultsDestination[] | cdktf.IResolvable;
  /**
  * envoy_extensions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_defaults#envoy_extensions ConfigEntryServiceDefaults#envoy_extensions}
  */
  readonly envoyExtensions?: ConfigEntryServiceDefaultsEnvoyExtensions[] | cdktf.IResolvable;
  /**
  * expose block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_defaults#expose ConfigEntryServiceDefaults#expose}
  */
  readonly expose: ConfigEntryServiceDefaultsExpose[] | cdktf.IResolvable;
  /**
  * mesh_gateway block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_defaults#mesh_gateway ConfigEntryServiceDefaults#mesh_gateway}
  */
  readonly meshGateway?: ConfigEntryServiceDefaultsMeshGateway[] | cdktf.IResolvable;
  /**
  * transparent_proxy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_defaults#transparent_proxy ConfigEntryServiceDefaults#transparent_proxy}
  */
  readonly transparentProxy?: ConfigEntryServiceDefaultsTransparentProxy[] | cdktf.IResolvable;
  /**
  * upstream_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_defaults#upstream_config ConfigEntryServiceDefaults#upstream_config}
  */
  readonly upstreamConfig?: ConfigEntryServiceDefaultsUpstreamConfig[] | cdktf.IResolvable;
}
export interface ConfigEntryServiceDefaultsDestination {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_defaults#addresses ConfigEntryServiceDefaults#addresses}
  */
  readonly addresses: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_defaults#port ConfigEntryServiceDefaults#port}
  */
  readonly port: number;
}

export function configEntryServiceDefaultsDestinationToTerraform(struct?: ConfigEntryServiceDefaultsDestination | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addresses: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.addresses),
    port: cdktf.numberToTerraform(struct!.port),
  }
}

export class ConfigEntryServiceDefaultsDestinationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ConfigEntryServiceDefaultsDestination | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addresses !== undefined) {
      hasAnyValues = true;
      internalValueResult.addresses = this._addresses;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConfigEntryServiceDefaultsDestination | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addresses = undefined;
      this._port = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addresses = value.addresses;
      this._port = value.port;
    }
  }

  // addresses - computed: false, optional: false, required: true
  private _addresses?: string[]; 
  public get addresses() {
    return this.getListAttribute('addresses');
  }
  public set addresses(value: string[]) {
    this._addresses = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addressesInput() {
    return this._addresses;
  }

  // port - computed: false, optional: false, required: true
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }
}

export class ConfigEntryServiceDefaultsDestinationList extends cdktf.ComplexList {
  public internalValue? : ConfigEntryServiceDefaultsDestination[] | cdktf.IResolvable

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
  public get(index: number): ConfigEntryServiceDefaultsDestinationOutputReference {
    return new ConfigEntryServiceDefaultsDestinationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConfigEntryServiceDefaultsEnvoyExtensions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_defaults#arguments ConfigEntryServiceDefaults#arguments}
  */
  readonly arguments?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_defaults#consul_version ConfigEntryServiceDefaults#consul_version}
  */
  readonly consulVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_defaults#envoy_version ConfigEntryServiceDefaults#envoy_version}
  */
  readonly envoyVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_defaults#name ConfigEntryServiceDefaults#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_defaults#required ConfigEntryServiceDefaults#required}
  */
  readonly required?: boolean | cdktf.IResolvable;
}

export function configEntryServiceDefaultsEnvoyExtensionsToTerraform(struct?: ConfigEntryServiceDefaultsEnvoyExtensions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    arguments: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.arguments),
    consul_version: cdktf.stringToTerraform(struct!.consulVersion),
    envoy_version: cdktf.stringToTerraform(struct!.envoyVersion),
    name: cdktf.stringToTerraform(struct!.name),
    required: cdktf.booleanToTerraform(struct!.required),
  }
}

export class ConfigEntryServiceDefaultsEnvoyExtensionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ConfigEntryServiceDefaultsEnvoyExtensions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._arguments !== undefined) {
      hasAnyValues = true;
      internalValueResult.arguments = this._arguments;
    }
    if (this._consulVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.consulVersion = this._consulVersion;
    }
    if (this._envoyVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.envoyVersion = this._envoyVersion;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._required !== undefined) {
      hasAnyValues = true;
      internalValueResult.required = this._required;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConfigEntryServiceDefaultsEnvoyExtensions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._arguments = undefined;
      this._consulVersion = undefined;
      this._envoyVersion = undefined;
      this._name = undefined;
      this._required = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._arguments = value.arguments;
      this._consulVersion = value.consulVersion;
      this._envoyVersion = value.envoyVersion;
      this._name = value.name;
      this._required = value.required;
    }
  }

  // arguments - computed: false, optional: true, required: false
  private _arguments?: { [key: string]: string }; 
  public get arguments() {
    return this.getStringMapAttribute('arguments');
  }
  public set arguments(value: { [key: string]: string }) {
    this._arguments = value;
  }
  public resetArguments() {
    this._arguments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get argumentsInput() {
    return this._arguments;
  }

  // consul_version - computed: false, optional: true, required: false
  private _consulVersion?: string; 
  public get consulVersion() {
    return this.getStringAttribute('consul_version');
  }
  public set consulVersion(value: string) {
    this._consulVersion = value;
  }
  public resetConsulVersion() {
    this._consulVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consulVersionInput() {
    return this._consulVersion;
  }

  // envoy_version - computed: false, optional: true, required: false
  private _envoyVersion?: string; 
  public get envoyVersion() {
    return this.getStringAttribute('envoy_version');
  }
  public set envoyVersion(value: string) {
    this._envoyVersion = value;
  }
  public resetEnvoyVersion() {
    this._envoyVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envoyVersionInput() {
    return this._envoyVersion;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // required - computed: false, optional: true, required: false
  private _required?: boolean | cdktf.IResolvable; 
  public get required() {
    return this.getBooleanAttribute('required');
  }
  public set required(value: boolean | cdktf.IResolvable) {
    this._required = value;
  }
  public resetRequired() {
    this._required = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredInput() {
    return this._required;
  }
}

export class ConfigEntryServiceDefaultsEnvoyExtensionsList extends cdktf.ComplexList {
  public internalValue? : ConfigEntryServiceDefaultsEnvoyExtensions[] | cdktf.IResolvable

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
  public get(index: number): ConfigEntryServiceDefaultsEnvoyExtensionsOutputReference {
    return new ConfigEntryServiceDefaultsEnvoyExtensionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConfigEntryServiceDefaultsExposePaths {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_defaults#listener_port ConfigEntryServiceDefaults#listener_port}
  */
  readonly listenerPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_defaults#local_path_port ConfigEntryServiceDefaults#local_path_port}
  */
  readonly localPathPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_defaults#path ConfigEntryServiceDefaults#path}
  */
  readonly path?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_defaults#protocol ConfigEntryServiceDefaults#protocol}
  */
  readonly protocol?: string;
}

export function configEntryServiceDefaultsExposePathsToTerraform(struct?: ConfigEntryServiceDefaultsExposePaths | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    listener_port: cdktf.numberToTerraform(struct!.listenerPort),
    local_path_port: cdktf.numberToTerraform(struct!.localPathPort),
    path: cdktf.stringToTerraform(struct!.path),
    protocol: cdktf.stringToTerraform(struct!.protocol),
  }
}

export class ConfigEntryServiceDefaultsExposePathsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ConfigEntryServiceDefaultsExposePaths | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._listenerPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.listenerPort = this._listenerPort;
    }
    if (this._localPathPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.localPathPort = this._localPathPort;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConfigEntryServiceDefaultsExposePaths | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._listenerPort = undefined;
      this._localPathPort = undefined;
      this._path = undefined;
      this._protocol = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._listenerPort = value.listenerPort;
      this._localPathPort = value.localPathPort;
      this._path = value.path;
      this._protocol = value.protocol;
    }
  }

  // listener_port - computed: false, optional: true, required: false
  private _listenerPort?: number; 
  public get listenerPort() {
    return this.getNumberAttribute('listener_port');
  }
  public set listenerPort(value: number) {
    this._listenerPort = value;
  }
  public resetListenerPort() {
    this._listenerPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get listenerPortInput() {
    return this._listenerPort;
  }

  // local_path_port - computed: false, optional: true, required: false
  private _localPathPort?: number; 
  public get localPathPort() {
    return this.getNumberAttribute('local_path_port');
  }
  public set localPathPort(value: number) {
    this._localPathPort = value;
  }
  public resetLocalPathPort() {
    this._localPathPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localPathPortInput() {
    return this._localPathPort;
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

  // protocol - computed: false, optional: true, required: false
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }
}

export class ConfigEntryServiceDefaultsExposePathsList extends cdktf.ComplexList {
  public internalValue? : ConfigEntryServiceDefaultsExposePaths[] | cdktf.IResolvable

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
  public get(index: number): ConfigEntryServiceDefaultsExposePathsOutputReference {
    return new ConfigEntryServiceDefaultsExposePathsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConfigEntryServiceDefaultsExpose {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_defaults#checks ConfigEntryServiceDefaults#checks}
  */
  readonly checks?: boolean | cdktf.IResolvable;
  /**
  * paths block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_defaults#paths ConfigEntryServiceDefaults#paths}
  */
  readonly paths?: ConfigEntryServiceDefaultsExposePaths[] | cdktf.IResolvable;
}

export function configEntryServiceDefaultsExposeToTerraform(struct?: ConfigEntryServiceDefaultsExpose | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    checks: cdktf.booleanToTerraform(struct!.checks),
    paths: cdktf.listMapper(configEntryServiceDefaultsExposePathsToTerraform, true)(struct!.paths),
  }
}

export class ConfigEntryServiceDefaultsExposeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ConfigEntryServiceDefaultsExpose | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._checks !== undefined) {
      hasAnyValues = true;
      internalValueResult.checks = this._checks;
    }
    if (this._paths?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.paths = this._paths?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConfigEntryServiceDefaultsExpose | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._checks = undefined;
      this._paths.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._checks = value.checks;
      this._paths.internalValue = value.paths;
    }
  }

  // checks - computed: false, optional: true, required: false
  private _checks?: boolean | cdktf.IResolvable; 
  public get checks() {
    return this.getBooleanAttribute('checks');
  }
  public set checks(value: boolean | cdktf.IResolvable) {
    this._checks = value;
  }
  public resetChecks() {
    this._checks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checksInput() {
    return this._checks;
  }

  // paths - computed: false, optional: true, required: false
  private _paths = new ConfigEntryServiceDefaultsExposePathsList(this, "paths", false);
  public get paths() {
    return this._paths;
  }
  public putPaths(value: ConfigEntryServiceDefaultsExposePaths[] | cdktf.IResolvable) {
    this._paths.internalValue = value;
  }
  public resetPaths() {
    this._paths.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathsInput() {
    return this._paths.internalValue;
  }
}

export class ConfigEntryServiceDefaultsExposeList extends cdktf.ComplexList {
  public internalValue? : ConfigEntryServiceDefaultsExpose[] | cdktf.IResolvable

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
  public get(index: number): ConfigEntryServiceDefaultsExposeOutputReference {
    return new ConfigEntryServiceDefaultsExposeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConfigEntryServiceDefaultsMeshGateway {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_defaults#mode ConfigEntryServiceDefaults#mode}
  */
  readonly mode: string;
}

export function configEntryServiceDefaultsMeshGatewayToTerraform(struct?: ConfigEntryServiceDefaultsMeshGateway | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mode: cdktf.stringToTerraform(struct!.mode),
  }
}

export class ConfigEntryServiceDefaultsMeshGatewayOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ConfigEntryServiceDefaultsMeshGateway | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConfigEntryServiceDefaultsMeshGateway | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mode = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mode = value.mode;
    }
  }

  // mode - computed: false, optional: false, required: true
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }
}

export class ConfigEntryServiceDefaultsMeshGatewayList extends cdktf.ComplexList {
  public internalValue? : ConfigEntryServiceDefaultsMeshGateway[] | cdktf.IResolvable

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
  public get(index: number): ConfigEntryServiceDefaultsMeshGatewayOutputReference {
    return new ConfigEntryServiceDefaultsMeshGatewayOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConfigEntryServiceDefaultsTransparentProxy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_defaults#dialed_directly ConfigEntryServiceDefaults#dialed_directly}
  */
  readonly dialedDirectly: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_defaults#outbound_listener_port ConfigEntryServiceDefaults#outbound_listener_port}
  */
  readonly outboundListenerPort: number;
}

export function configEntryServiceDefaultsTransparentProxyToTerraform(struct?: ConfigEntryServiceDefaultsTransparentProxy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dialed_directly: cdktf.booleanToTerraform(struct!.dialedDirectly),
    outbound_listener_port: cdktf.numberToTerraform(struct!.outboundListenerPort),
  }
}

export class ConfigEntryServiceDefaultsTransparentProxyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ConfigEntryServiceDefaultsTransparentProxy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dialedDirectly !== undefined) {
      hasAnyValues = true;
      internalValueResult.dialedDirectly = this._dialedDirectly;
    }
    if (this._outboundListenerPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.outboundListenerPort = this._outboundListenerPort;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConfigEntryServiceDefaultsTransparentProxy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dialedDirectly = undefined;
      this._outboundListenerPort = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dialedDirectly = value.dialedDirectly;
      this._outboundListenerPort = value.outboundListenerPort;
    }
  }

  // dialed_directly - computed: false, optional: false, required: true
  private _dialedDirectly?: boolean | cdktf.IResolvable; 
  public get dialedDirectly() {
    return this.getBooleanAttribute('dialed_directly');
  }
  public set dialedDirectly(value: boolean | cdktf.IResolvable) {
    this._dialedDirectly = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dialedDirectlyInput() {
    return this._dialedDirectly;
  }

  // outbound_listener_port - computed: false, optional: false, required: true
  private _outboundListenerPort?: number; 
  public get outboundListenerPort() {
    return this.getNumberAttribute('outbound_listener_port');
  }
  public set outboundListenerPort(value: number) {
    this._outboundListenerPort = value;
  }
  // Temporarily expose input value. Use with caution.
  public get outboundListenerPortInput() {
    return this._outboundListenerPort;
  }
}

export class ConfigEntryServiceDefaultsTransparentProxyList extends cdktf.ComplexList {
  public internalValue? : ConfigEntryServiceDefaultsTransparentProxy[] | cdktf.IResolvable

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
  public get(index: number): ConfigEntryServiceDefaultsTransparentProxyOutputReference {
    return new ConfigEntryServiceDefaultsTransparentProxyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimits {
  /**
  * Specifies the maximum number of concurrent requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_defaults#max_concurrent_requests ConfigEntryServiceDefaults#max_concurrent_requests}
  */
  readonly maxConcurrentRequests?: number;
  /**
  * Specifies the maximum number of connections a service instance can establish against the upstream.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_defaults#max_connections ConfigEntryServiceDefaults#max_connections}
  */
  readonly maxConnections?: number;
  /**
  * Specifies the maximum number of requests that are queued while waiting for a connection to establish.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_defaults#max_pending_requests ConfigEntryServiceDefaults#max_pending_requests}
  */
  readonly maxPendingRequests?: number;
}

export function configEntryServiceDefaultsUpstreamConfigDefaultsLimitsToTerraform(struct?: ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimits | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_concurrent_requests: cdktf.numberToTerraform(struct!.maxConcurrentRequests),
    max_connections: cdktf.numberToTerraform(struct!.maxConnections),
    max_pending_requests: cdktf.numberToTerraform(struct!.maxPendingRequests),
  }
}

export class ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimits | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxConcurrentRequests !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxConcurrentRequests = this._maxConcurrentRequests;
    }
    if (this._maxConnections !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxConnections = this._maxConnections;
    }
    if (this._maxPendingRequests !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxPendingRequests = this._maxPendingRequests;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimits | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxConcurrentRequests = undefined;
      this._maxConnections = undefined;
      this._maxPendingRequests = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxConcurrentRequests = value.maxConcurrentRequests;
      this._maxConnections = value.maxConnections;
      this._maxPendingRequests = value.maxPendingRequests;
    }
  }

  // max_concurrent_requests - computed: false, optional: true, required: false
  private _maxConcurrentRequests?: number; 
  public get maxConcurrentRequests() {
    return this.getNumberAttribute('max_concurrent_requests');
  }
  public set maxConcurrentRequests(value: number) {
    this._maxConcurrentRequests = value;
  }
  public resetMaxConcurrentRequests() {
    this._maxConcurrentRequests = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxConcurrentRequestsInput() {
    return this._maxConcurrentRequests;
  }

  // max_connections - computed: false, optional: true, required: false
  private _maxConnections?: number; 
  public get maxConnections() {
    return this.getNumberAttribute('max_connections');
  }
  public set maxConnections(value: number) {
    this._maxConnections = value;
  }
  public resetMaxConnections() {
    this._maxConnections = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxConnectionsInput() {
    return this._maxConnections;
  }

  // max_pending_requests - computed: false, optional: true, required: false
  private _maxPendingRequests?: number; 
  public get maxPendingRequests() {
    return this.getNumberAttribute('max_pending_requests');
  }
  public set maxPendingRequests(value: number) {
    this._maxPendingRequests = value;
  }
  public resetMaxPendingRequests() {
    this._maxPendingRequests = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxPendingRequestsInput() {
    return this._maxPendingRequests;
  }
}

export class ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsList extends cdktf.ComplexList {
  public internalValue? : ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimits[] | cdktf.IResolvable

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
  public get(index: number): ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsOutputReference {
    return new ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGateway {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_defaults#mode ConfigEntryServiceDefaults#mode}
  */
  readonly mode?: string;
}

export function configEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayToTerraform(struct?: ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGateway | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mode: cdktf.stringToTerraform(struct!.mode),
  }
}

export class ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGateway | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGateway | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mode = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mode = value.mode;
    }
  }

  // mode - computed: false, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }
}

export class ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayList extends cdktf.ComplexList {
  public internalValue? : ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGateway[] | cdktf.IResolvable

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
  public get(index: number): ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayOutputReference {
    return new ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheck {
  /**
  * Specifies the minimum amount of time that an ejected host must remain outside the cluster before rejoining.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_defaults#base_ejection_time ConfigEntryServiceDefaults#base_ejection_time}
  */
  readonly baseEjectionTime?: string;
  /**
  * Specifies a percentage that indicates how many times out of 100 that Consul ejects the host when it detects an outlier status.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_defaults#enforcing_consecutive_5xx ConfigEntryServiceDefaults#enforcing_consecutive_5xx}
  */
  readonly enforcingConsecutive5Xx?: number;
  /**
  * Specifies the time between checks.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_defaults#interval ConfigEntryServiceDefaults#interval}
  */
  readonly interval?: string;
  /**
  * Specifies the maximum percentage of an upstream cluster that Consul ejects when the proxy reports an outlier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_defaults#max_ejection_percent ConfigEntryServiceDefaults#max_ejection_percent}
  */
  readonly maxEjectionPercent?: number;
  /**
  * Specifies the number of consecutive failures allowed per check interval. If exceeded, Consul removes the host from the load balancer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_defaults#max_failures ConfigEntryServiceDefaults#max_failures}
  */
  readonly maxFailures?: number;
}

export function configEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckToTerraform(struct?: ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheck | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    base_ejection_time: cdktf.stringToTerraform(struct!.baseEjectionTime),
    enforcing_consecutive_5xx: cdktf.numberToTerraform(struct!.enforcingConsecutive5Xx),
    interval: cdktf.stringToTerraform(struct!.interval),
    max_ejection_percent: cdktf.numberToTerraform(struct!.maxEjectionPercent),
    max_failures: cdktf.numberToTerraform(struct!.maxFailures),
  }
}

export class ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheck | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._baseEjectionTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.baseEjectionTime = this._baseEjectionTime;
    }
    if (this._enforcingConsecutive5Xx !== undefined) {
      hasAnyValues = true;
      internalValueResult.enforcingConsecutive5Xx = this._enforcingConsecutive5Xx;
    }
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    if (this._maxEjectionPercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxEjectionPercent = this._maxEjectionPercent;
    }
    if (this._maxFailures !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxFailures = this._maxFailures;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheck | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._baseEjectionTime = undefined;
      this._enforcingConsecutive5Xx = undefined;
      this._interval = undefined;
      this._maxEjectionPercent = undefined;
      this._maxFailures = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._baseEjectionTime = value.baseEjectionTime;
      this._enforcingConsecutive5Xx = value.enforcingConsecutive5Xx;
      this._interval = value.interval;
      this._maxEjectionPercent = value.maxEjectionPercent;
      this._maxFailures = value.maxFailures;
    }
  }

  // base_ejection_time - computed: false, optional: true, required: false
  private _baseEjectionTime?: string; 
  public get baseEjectionTime() {
    return this.getStringAttribute('base_ejection_time');
  }
  public set baseEjectionTime(value: string) {
    this._baseEjectionTime = value;
  }
  public resetBaseEjectionTime() {
    this._baseEjectionTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baseEjectionTimeInput() {
    return this._baseEjectionTime;
  }

  // enforcing_consecutive_5xx - computed: false, optional: true, required: false
  private _enforcingConsecutive5Xx?: number; 
  public get enforcingConsecutive5Xx() {
    return this.getNumberAttribute('enforcing_consecutive_5xx');
  }
  public set enforcingConsecutive5Xx(value: number) {
    this._enforcingConsecutive5Xx = value;
  }
  public resetEnforcingConsecutive5Xx() {
    this._enforcingConsecutive5Xx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enforcingConsecutive5XxInput() {
    return this._enforcingConsecutive5Xx;
  }

  // interval - computed: false, optional: true, required: false
  private _interval?: string; 
  public get interval() {
    return this.getStringAttribute('interval');
  }
  public set interval(value: string) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }

  // max_ejection_percent - computed: false, optional: true, required: false
  private _maxEjectionPercent?: number; 
  public get maxEjectionPercent() {
    return this.getNumberAttribute('max_ejection_percent');
  }
  public set maxEjectionPercent(value: number) {
    this._maxEjectionPercent = value;
  }
  public resetMaxEjectionPercent() {
    this._maxEjectionPercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxEjectionPercentInput() {
    return this._maxEjectionPercent;
  }

  // max_failures - computed: false, optional: true, required: false
  private _maxFailures?: number; 
  public get maxFailures() {
    return this.getNumberAttribute('max_failures');
  }
  public set maxFailures(value: number) {
    this._maxFailures = value;
  }
  public resetMaxFailures() {
    this._maxFailures = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxFailuresInput() {
    return this._maxFailures;
  }
}

export class ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckList extends cdktf.ComplexList {
  public internalValue? : ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheck[] | cdktf.IResolvable

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
  public get(index: number): ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckOutputReference {
    return new ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConfigEntryServiceDefaultsUpstreamConfigDefaults {
  /**
  * Sets the strategy for allocating outbound connections from upstreams across Envoy proxy threads.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_defaults#balance_outbound_connections ConfigEntryServiceDefaults#balance_outbound_connections}
  */
  readonly balanceOutboundConnections?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_defaults#connect_timeout_ms ConfigEntryServiceDefaults#connect_timeout_ms}
  */
  readonly connectTimeoutMs?: number;
  /**
  * Specifies the default protocol for the service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_defaults#protocol ConfigEntryServiceDefaults#protocol}
  */
  readonly protocol?: string;
  /**
  * limits block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_defaults#limits ConfigEntryServiceDefaults#limits}
  */
  readonly limits?: ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimits[] | cdktf.IResolvable;
  /**
  * mesh_gateway block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_defaults#mesh_gateway ConfigEntryServiceDefaults#mesh_gateway}
  */
  readonly meshGateway?: ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGateway[] | cdktf.IResolvable;
  /**
  * passive_health_check block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_defaults#passive_health_check ConfigEntryServiceDefaults#passive_health_check}
  */
  readonly passiveHealthCheck?: ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheck[] | cdktf.IResolvable;
}

export function configEntryServiceDefaultsUpstreamConfigDefaultsToTerraform(struct?: ConfigEntryServiceDefaultsUpstreamConfigDefaults | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    balance_outbound_connections: cdktf.stringToTerraform(struct!.balanceOutboundConnections),
    connect_timeout_ms: cdktf.numberToTerraform(struct!.connectTimeoutMs),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    limits: cdktf.listMapper(configEntryServiceDefaultsUpstreamConfigDefaultsLimitsToTerraform, true)(struct!.limits),
    mesh_gateway: cdktf.listMapper(configEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayToTerraform, true)(struct!.meshGateway),
    passive_health_check: cdktf.listMapper(configEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckToTerraform, true)(struct!.passiveHealthCheck),
  }
}

export class ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ConfigEntryServiceDefaultsUpstreamConfigDefaults | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._balanceOutboundConnections !== undefined) {
      hasAnyValues = true;
      internalValueResult.balanceOutboundConnections = this._balanceOutboundConnections;
    }
    if (this._connectTimeoutMs !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectTimeoutMs = this._connectTimeoutMs;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._limits?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.limits = this._limits?.internalValue;
    }
    if (this._meshGateway?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.meshGateway = this._meshGateway?.internalValue;
    }
    if (this._passiveHealthCheck?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.passiveHealthCheck = this._passiveHealthCheck?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConfigEntryServiceDefaultsUpstreamConfigDefaults | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._balanceOutboundConnections = undefined;
      this._connectTimeoutMs = undefined;
      this._protocol = undefined;
      this._limits.internalValue = undefined;
      this._meshGateway.internalValue = undefined;
      this._passiveHealthCheck.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._balanceOutboundConnections = value.balanceOutboundConnections;
      this._connectTimeoutMs = value.connectTimeoutMs;
      this._protocol = value.protocol;
      this._limits.internalValue = value.limits;
      this._meshGateway.internalValue = value.meshGateway;
      this._passiveHealthCheck.internalValue = value.passiveHealthCheck;
    }
  }

  // balance_outbound_connections - computed: false, optional: true, required: false
  private _balanceOutboundConnections?: string; 
  public get balanceOutboundConnections() {
    return this.getStringAttribute('balance_outbound_connections');
  }
  public set balanceOutboundConnections(value: string) {
    this._balanceOutboundConnections = value;
  }
  public resetBalanceOutboundConnections() {
    this._balanceOutboundConnections = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get balanceOutboundConnectionsInput() {
    return this._balanceOutboundConnections;
  }

  // connect_timeout_ms - computed: false, optional: true, required: false
  private _connectTimeoutMs?: number; 
  public get connectTimeoutMs() {
    return this.getNumberAttribute('connect_timeout_ms');
  }
  public set connectTimeoutMs(value: number) {
    this._connectTimeoutMs = value;
  }
  public resetConnectTimeoutMs() {
    this._connectTimeoutMs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectTimeoutMsInput() {
    return this._connectTimeoutMs;
  }

  // protocol - computed: false, optional: true, required: false
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // limits - computed: false, optional: true, required: false
  private _limits = new ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsList(this, "limits", true);
  public get limits() {
    return this._limits;
  }
  public putLimits(value: ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimits[] | cdktf.IResolvable) {
    this._limits.internalValue = value;
  }
  public resetLimits() {
    this._limits.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitsInput() {
    return this._limits.internalValue;
  }

  // mesh_gateway - computed: false, optional: true, required: false
  private _meshGateway = new ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayList(this, "mesh_gateway", true);
  public get meshGateway() {
    return this._meshGateway;
  }
  public putMeshGateway(value: ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGateway[] | cdktf.IResolvable) {
    this._meshGateway.internalValue = value;
  }
  public resetMeshGateway() {
    this._meshGateway.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get meshGatewayInput() {
    return this._meshGateway.internalValue;
  }

  // passive_health_check - computed: false, optional: true, required: false
  private _passiveHealthCheck = new ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckList(this, "passive_health_check", true);
  public get passiveHealthCheck() {
    return this._passiveHealthCheck;
  }
  public putPassiveHealthCheck(value: ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheck[] | cdktf.IResolvable) {
    this._passiveHealthCheck.internalValue = value;
  }
  public resetPassiveHealthCheck() {
    this._passiveHealthCheck.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passiveHealthCheckInput() {
    return this._passiveHealthCheck.internalValue;
  }
}

export class ConfigEntryServiceDefaultsUpstreamConfigDefaultsList extends cdktf.ComplexList {
  public internalValue? : ConfigEntryServiceDefaultsUpstreamConfigDefaults[] | cdktf.IResolvable

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
  public get(index: number): ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference {
    return new ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConfigEntryServiceDefaultsUpstreamConfigOverridesLimits {
  /**
  * Specifies the maximum number of concurrent requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_defaults#max_concurrent_requests ConfigEntryServiceDefaults#max_concurrent_requests}
  */
  readonly maxConcurrentRequests?: number;
  /**
  * Specifies the maximum number of connections a service instance can establish against the upstream.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_defaults#max_connections ConfigEntryServiceDefaults#max_connections}
  */
  readonly maxConnections?: number;
  /**
  * Specifies the maximum number of requests that are queued while waiting for a connection to establish.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_defaults#max_pending_requests ConfigEntryServiceDefaults#max_pending_requests}
  */
  readonly maxPendingRequests?: number;
}

export function configEntryServiceDefaultsUpstreamConfigOverridesLimitsToTerraform(struct?: ConfigEntryServiceDefaultsUpstreamConfigOverridesLimits | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_concurrent_requests: cdktf.numberToTerraform(struct!.maxConcurrentRequests),
    max_connections: cdktf.numberToTerraform(struct!.maxConnections),
    max_pending_requests: cdktf.numberToTerraform(struct!.maxPendingRequests),
  }
}

export class ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ConfigEntryServiceDefaultsUpstreamConfigOverridesLimits | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxConcurrentRequests !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxConcurrentRequests = this._maxConcurrentRequests;
    }
    if (this._maxConnections !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxConnections = this._maxConnections;
    }
    if (this._maxPendingRequests !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxPendingRequests = this._maxPendingRequests;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConfigEntryServiceDefaultsUpstreamConfigOverridesLimits | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxConcurrentRequests = undefined;
      this._maxConnections = undefined;
      this._maxPendingRequests = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxConcurrentRequests = value.maxConcurrentRequests;
      this._maxConnections = value.maxConnections;
      this._maxPendingRequests = value.maxPendingRequests;
    }
  }

  // max_concurrent_requests - computed: false, optional: true, required: false
  private _maxConcurrentRequests?: number; 
  public get maxConcurrentRequests() {
    return this.getNumberAttribute('max_concurrent_requests');
  }
  public set maxConcurrentRequests(value: number) {
    this._maxConcurrentRequests = value;
  }
  public resetMaxConcurrentRequests() {
    this._maxConcurrentRequests = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxConcurrentRequestsInput() {
    return this._maxConcurrentRequests;
  }

  // max_connections - computed: false, optional: true, required: false
  private _maxConnections?: number; 
  public get maxConnections() {
    return this.getNumberAttribute('max_connections');
  }
  public set maxConnections(value: number) {
    this._maxConnections = value;
  }
  public resetMaxConnections() {
    this._maxConnections = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxConnectionsInput() {
    return this._maxConnections;
  }

  // max_pending_requests - computed: false, optional: true, required: false
  private _maxPendingRequests?: number; 
  public get maxPendingRequests() {
    return this.getNumberAttribute('max_pending_requests');
  }
  public set maxPendingRequests(value: number) {
    this._maxPendingRequests = value;
  }
  public resetMaxPendingRequests() {
    this._maxPendingRequests = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxPendingRequestsInput() {
    return this._maxPendingRequests;
  }
}

export class ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsList extends cdktf.ComplexList {
  public internalValue? : ConfigEntryServiceDefaultsUpstreamConfigOverridesLimits[] | cdktf.IResolvable

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
  public get(index: number): ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsOutputReference {
    return new ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGateway {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_defaults#mode ConfigEntryServiceDefaults#mode}
  */
  readonly mode?: string;
}

export function configEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayToTerraform(struct?: ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGateway | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mode: cdktf.stringToTerraform(struct!.mode),
  }
}

export class ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGateway | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGateway | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mode = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mode = value.mode;
    }
  }

  // mode - computed: false, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }
}

export class ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayList extends cdktf.ComplexList {
  public internalValue? : ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGateway[] | cdktf.IResolvable

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
  public get(index: number): ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayOutputReference {
    return new ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheck {
  /**
  * Specifies the minimum amount of time that an ejected host must remain outside the cluster before rejoining.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_defaults#base_ejection_time ConfigEntryServiceDefaults#base_ejection_time}
  */
  readonly baseEjectionTime?: string;
  /**
  * Specifies a percentage that indicates how many times out of 100 that Consul ejects the host when it detects an outlier status.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_defaults#enforcing_consecutive_5xx ConfigEntryServiceDefaults#enforcing_consecutive_5xx}
  */
  readonly enforcingConsecutive5Xx?: number;
  /**
  * Specifies the time between checks.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_defaults#interval ConfigEntryServiceDefaults#interval}
  */
  readonly interval?: string;
  /**
  * Specifies the maximum percentage of an upstream cluster that Consul ejects when the proxy reports an outlier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_defaults#max_ejection_percent ConfigEntryServiceDefaults#max_ejection_percent}
  */
  readonly maxEjectionPercent?: number;
  /**
  * Specifies the number of consecutive failures allowed per check interval. If exceeded, Consul removes the host from the load balancer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_defaults#max_failures ConfigEntryServiceDefaults#max_failures}
  */
  readonly maxFailures?: number;
}

export function configEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckToTerraform(struct?: ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheck | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    base_ejection_time: cdktf.stringToTerraform(struct!.baseEjectionTime),
    enforcing_consecutive_5xx: cdktf.numberToTerraform(struct!.enforcingConsecutive5Xx),
    interval: cdktf.stringToTerraform(struct!.interval),
    max_ejection_percent: cdktf.numberToTerraform(struct!.maxEjectionPercent),
    max_failures: cdktf.numberToTerraform(struct!.maxFailures),
  }
}

export class ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheck | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._baseEjectionTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.baseEjectionTime = this._baseEjectionTime;
    }
    if (this._enforcingConsecutive5Xx !== undefined) {
      hasAnyValues = true;
      internalValueResult.enforcingConsecutive5Xx = this._enforcingConsecutive5Xx;
    }
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    if (this._maxEjectionPercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxEjectionPercent = this._maxEjectionPercent;
    }
    if (this._maxFailures !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxFailures = this._maxFailures;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheck | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._baseEjectionTime = undefined;
      this._enforcingConsecutive5Xx = undefined;
      this._interval = undefined;
      this._maxEjectionPercent = undefined;
      this._maxFailures = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._baseEjectionTime = value.baseEjectionTime;
      this._enforcingConsecutive5Xx = value.enforcingConsecutive5Xx;
      this._interval = value.interval;
      this._maxEjectionPercent = value.maxEjectionPercent;
      this._maxFailures = value.maxFailures;
    }
  }

  // base_ejection_time - computed: false, optional: true, required: false
  private _baseEjectionTime?: string; 
  public get baseEjectionTime() {
    return this.getStringAttribute('base_ejection_time');
  }
  public set baseEjectionTime(value: string) {
    this._baseEjectionTime = value;
  }
  public resetBaseEjectionTime() {
    this._baseEjectionTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baseEjectionTimeInput() {
    return this._baseEjectionTime;
  }

  // enforcing_consecutive_5xx - computed: false, optional: true, required: false
  private _enforcingConsecutive5Xx?: number; 
  public get enforcingConsecutive5Xx() {
    return this.getNumberAttribute('enforcing_consecutive_5xx');
  }
  public set enforcingConsecutive5Xx(value: number) {
    this._enforcingConsecutive5Xx = value;
  }
  public resetEnforcingConsecutive5Xx() {
    this._enforcingConsecutive5Xx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enforcingConsecutive5XxInput() {
    return this._enforcingConsecutive5Xx;
  }

  // interval - computed: false, optional: true, required: false
  private _interval?: string; 
  public get interval() {
    return this.getStringAttribute('interval');
  }
  public set interval(value: string) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }

  // max_ejection_percent - computed: false, optional: true, required: false
  private _maxEjectionPercent?: number; 
  public get maxEjectionPercent() {
    return this.getNumberAttribute('max_ejection_percent');
  }
  public set maxEjectionPercent(value: number) {
    this._maxEjectionPercent = value;
  }
  public resetMaxEjectionPercent() {
    this._maxEjectionPercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxEjectionPercentInput() {
    return this._maxEjectionPercent;
  }

  // max_failures - computed: false, optional: true, required: false
  private _maxFailures?: number; 
  public get maxFailures() {
    return this.getNumberAttribute('max_failures');
  }
  public set maxFailures(value: number) {
    this._maxFailures = value;
  }
  public resetMaxFailures() {
    this._maxFailures = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxFailuresInput() {
    return this._maxFailures;
  }
}

export class ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckList extends cdktf.ComplexList {
  public internalValue? : ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheck[] | cdktf.IResolvable

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
  public get(index: number): ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckOutputReference {
    return new ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConfigEntryServiceDefaultsUpstreamConfigOverrides {
  /**
  * Sets the strategy for allocating outbound connections from upstreams across Envoy proxy threads.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_defaults#balance_outbound_connections ConfigEntryServiceDefaults#balance_outbound_connections}
  */
  readonly balanceOutboundConnections?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_defaults#connect_timeout_ms ConfigEntryServiceDefaults#connect_timeout_ms}
  */
  readonly connectTimeoutMs?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_defaults#envoy_listener_json ConfigEntryServiceDefaults#envoy_listener_json}
  */
  readonly envoyListenerJson?: string;
  /**
  * Specifies the name of the service you are setting the defaults for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_defaults#name ConfigEntryServiceDefaults#name}
  */
  readonly name?: string;
  /**
  * Specifies the namespace containing the upstream service that the configuration applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_defaults#namespace ConfigEntryServiceDefaults#namespace}
  */
  readonly namespace?: string;
  /**
  * Specifies the name of the name of the Consul admin partition that the configuration entry applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_defaults#partition ConfigEntryServiceDefaults#partition}
  */
  readonly partition?: string;
  /**
  * Specifies the peer name of the upstream service that the configuration applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_defaults#peer ConfigEntryServiceDefaults#peer}
  */
  readonly peer?: string;
  /**
  * Specifies the default protocol for the service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_defaults#protocol ConfigEntryServiceDefaults#protocol}
  */
  readonly protocol?: string;
  /**
  * limits block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_defaults#limits ConfigEntryServiceDefaults#limits}
  */
  readonly limits?: ConfigEntryServiceDefaultsUpstreamConfigOverridesLimits[] | cdktf.IResolvable;
  /**
  * mesh_gateway block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_defaults#mesh_gateway ConfigEntryServiceDefaults#mesh_gateway}
  */
  readonly meshGateway?: ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGateway[] | cdktf.IResolvable;
  /**
  * passive_health_check block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_defaults#passive_health_check ConfigEntryServiceDefaults#passive_health_check}
  */
  readonly passiveHealthCheck?: ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheck[] | cdktf.IResolvable;
}

export function configEntryServiceDefaultsUpstreamConfigOverridesToTerraform(struct?: ConfigEntryServiceDefaultsUpstreamConfigOverrides | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    balance_outbound_connections: cdktf.stringToTerraform(struct!.balanceOutboundConnections),
    connect_timeout_ms: cdktf.numberToTerraform(struct!.connectTimeoutMs),
    envoy_listener_json: cdktf.stringToTerraform(struct!.envoyListenerJson),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    partition: cdktf.stringToTerraform(struct!.partition),
    peer: cdktf.stringToTerraform(struct!.peer),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    limits: cdktf.listMapper(configEntryServiceDefaultsUpstreamConfigOverridesLimitsToTerraform, true)(struct!.limits),
    mesh_gateway: cdktf.listMapper(configEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayToTerraform, true)(struct!.meshGateway),
    passive_health_check: cdktf.listMapper(configEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckToTerraform, true)(struct!.passiveHealthCheck),
  }
}

export class ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ConfigEntryServiceDefaultsUpstreamConfigOverrides | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._balanceOutboundConnections !== undefined) {
      hasAnyValues = true;
      internalValueResult.balanceOutboundConnections = this._balanceOutboundConnections;
    }
    if (this._connectTimeoutMs !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectTimeoutMs = this._connectTimeoutMs;
    }
    if (this._envoyListenerJson !== undefined) {
      hasAnyValues = true;
      internalValueResult.envoyListenerJson = this._envoyListenerJson;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
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
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._limits?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.limits = this._limits?.internalValue;
    }
    if (this._meshGateway?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.meshGateway = this._meshGateway?.internalValue;
    }
    if (this._passiveHealthCheck?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.passiveHealthCheck = this._passiveHealthCheck?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConfigEntryServiceDefaultsUpstreamConfigOverrides | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._balanceOutboundConnections = undefined;
      this._connectTimeoutMs = undefined;
      this._envoyListenerJson = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._partition = undefined;
      this._peer = undefined;
      this._protocol = undefined;
      this._limits.internalValue = undefined;
      this._meshGateway.internalValue = undefined;
      this._passiveHealthCheck.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._balanceOutboundConnections = value.balanceOutboundConnections;
      this._connectTimeoutMs = value.connectTimeoutMs;
      this._envoyListenerJson = value.envoyListenerJson;
      this._name = value.name;
      this._namespace = value.namespace;
      this._partition = value.partition;
      this._peer = value.peer;
      this._protocol = value.protocol;
      this._limits.internalValue = value.limits;
      this._meshGateway.internalValue = value.meshGateway;
      this._passiveHealthCheck.internalValue = value.passiveHealthCheck;
    }
  }

  // balance_outbound_connections - computed: false, optional: true, required: false
  private _balanceOutboundConnections?: string; 
  public get balanceOutboundConnections() {
    return this.getStringAttribute('balance_outbound_connections');
  }
  public set balanceOutboundConnections(value: string) {
    this._balanceOutboundConnections = value;
  }
  public resetBalanceOutboundConnections() {
    this._balanceOutboundConnections = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get balanceOutboundConnectionsInput() {
    return this._balanceOutboundConnections;
  }

  // connect_timeout_ms - computed: false, optional: true, required: false
  private _connectTimeoutMs?: number; 
  public get connectTimeoutMs() {
    return this.getNumberAttribute('connect_timeout_ms');
  }
  public set connectTimeoutMs(value: number) {
    this._connectTimeoutMs = value;
  }
  public resetConnectTimeoutMs() {
    this._connectTimeoutMs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectTimeoutMsInput() {
    return this._connectTimeoutMs;
  }

  // envoy_listener_json - computed: false, optional: true, required: false
  private _envoyListenerJson?: string; 
  public get envoyListenerJson() {
    return this.getStringAttribute('envoy_listener_json');
  }
  public set envoyListenerJson(value: string) {
    this._envoyListenerJson = value;
  }
  public resetEnvoyListenerJson() {
    this._envoyListenerJson = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envoyListenerJsonInput() {
    return this._envoyListenerJson;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
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

  // protocol - computed: false, optional: true, required: false
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // limits - computed: false, optional: true, required: false
  private _limits = new ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsList(this, "limits", true);
  public get limits() {
    return this._limits;
  }
  public putLimits(value: ConfigEntryServiceDefaultsUpstreamConfigOverridesLimits[] | cdktf.IResolvable) {
    this._limits.internalValue = value;
  }
  public resetLimits() {
    this._limits.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitsInput() {
    return this._limits.internalValue;
  }

  // mesh_gateway - computed: false, optional: true, required: false
  private _meshGateway = new ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayList(this, "mesh_gateway", true);
  public get meshGateway() {
    return this._meshGateway;
  }
  public putMeshGateway(value: ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGateway[] | cdktf.IResolvable) {
    this._meshGateway.internalValue = value;
  }
  public resetMeshGateway() {
    this._meshGateway.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get meshGatewayInput() {
    return this._meshGateway.internalValue;
  }

  // passive_health_check - computed: false, optional: true, required: false
  private _passiveHealthCheck = new ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckList(this, "passive_health_check", true);
  public get passiveHealthCheck() {
    return this._passiveHealthCheck;
  }
  public putPassiveHealthCheck(value: ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheck[] | cdktf.IResolvable) {
    this._passiveHealthCheck.internalValue = value;
  }
  public resetPassiveHealthCheck() {
    this._passiveHealthCheck.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passiveHealthCheckInput() {
    return this._passiveHealthCheck.internalValue;
  }
}

export class ConfigEntryServiceDefaultsUpstreamConfigOverridesList extends cdktf.ComplexList {
  public internalValue? : ConfigEntryServiceDefaultsUpstreamConfigOverrides[] | cdktf.IResolvable

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
  public get(index: number): ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference {
    return new ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConfigEntryServiceDefaultsUpstreamConfig {
  /**
  * defaults block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_defaults#defaults ConfigEntryServiceDefaults#defaults}
  */
  readonly defaults?: ConfigEntryServiceDefaultsUpstreamConfigDefaults[] | cdktf.IResolvable;
  /**
  * overrides block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_defaults#overrides ConfigEntryServiceDefaults#overrides}
  */
  readonly overrides?: ConfigEntryServiceDefaultsUpstreamConfigOverrides[] | cdktf.IResolvable;
}

export function configEntryServiceDefaultsUpstreamConfigToTerraform(struct?: ConfigEntryServiceDefaultsUpstreamConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    defaults: cdktf.listMapper(configEntryServiceDefaultsUpstreamConfigDefaultsToTerraform, true)(struct!.defaults),
    overrides: cdktf.listMapper(configEntryServiceDefaultsUpstreamConfigOverridesToTerraform, true)(struct!.overrides),
  }
}

export class ConfigEntryServiceDefaultsUpstreamConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ConfigEntryServiceDefaultsUpstreamConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaults?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaults = this._defaults?.internalValue;
    }
    if (this._overrides?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.overrides = this._overrides?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConfigEntryServiceDefaultsUpstreamConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._defaults.internalValue = undefined;
      this._overrides.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._defaults.internalValue = value.defaults;
      this._overrides.internalValue = value.overrides;
    }
  }

  // defaults - computed: false, optional: true, required: false
  private _defaults = new ConfigEntryServiceDefaultsUpstreamConfigDefaultsList(this, "defaults", true);
  public get defaults() {
    return this._defaults;
  }
  public putDefaults(value: ConfigEntryServiceDefaultsUpstreamConfigDefaults[] | cdktf.IResolvable) {
    this._defaults.internalValue = value;
  }
  public resetDefaults() {
    this._defaults.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultsInput() {
    return this._defaults.internalValue;
  }

  // overrides - computed: false, optional: true, required: false
  private _overrides = new ConfigEntryServiceDefaultsUpstreamConfigOverridesList(this, "overrides", false);
  public get overrides() {
    return this._overrides;
  }
  public putOverrides(value: ConfigEntryServiceDefaultsUpstreamConfigOverrides[] | cdktf.IResolvable) {
    this._overrides.internalValue = value;
  }
  public resetOverrides() {
    this._overrides.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overridesInput() {
    return this._overrides.internalValue;
  }
}

export class ConfigEntryServiceDefaultsUpstreamConfigList extends cdktf.ComplexList {
  public internalValue? : ConfigEntryServiceDefaultsUpstreamConfig[] | cdktf.IResolvable

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
  public get(index: number): ConfigEntryServiceDefaultsUpstreamConfigOutputReference {
    return new ConfigEntryServiceDefaultsUpstreamConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_defaults consul_config_entry_service_defaults}
*/
export class ConfigEntryServiceDefaults extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "consul_config_entry_service_defaults";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ConfigEntryServiceDefaults resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ConfigEntryServiceDefaults to import
  * @param importFromId The id of the existing ConfigEntryServiceDefaults that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_defaults#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ConfigEntryServiceDefaults to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "consul_config_entry_service_defaults", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_defaults consul_config_entry_service_defaults} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ConfigEntryServiceDefaultsConfig
  */
  public constructor(scope: Construct, id: string, config: ConfigEntryServiceDefaultsConfig) {
    super(scope, id, {
      terraformResourceType: 'consul_config_entry_service_defaults',
      terraformGeneratorMetadata: {
        providerName: 'consul',
        providerVersion: '2.20.0',
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
    this._balanceInboundConnections = config.balanceInboundConnections;
    this._externalSni = config.externalSni;
    this._id = config.id;
    this._localConnectTimeoutMs = config.localConnectTimeoutMs;
    this._localRequestTimeoutMs = config.localRequestTimeoutMs;
    this._maxInboundConnections = config.maxInboundConnections;
    this._meta = config.meta;
    this._mode = config.mode;
    this._mutualTlsMode = config.mutualTlsMode;
    this._name = config.name;
    this._namespace = config.namespace;
    this._partition = config.partition;
    this._protocol = config.protocol;
    this._destination.internalValue = config.destination;
    this._envoyExtensions.internalValue = config.envoyExtensions;
    this._expose.internalValue = config.expose;
    this._meshGateway.internalValue = config.meshGateway;
    this._transparentProxy.internalValue = config.transparentProxy;
    this._upstreamConfig.internalValue = config.upstreamConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // balance_inbound_connections - computed: false, optional: true, required: false
  private _balanceInboundConnections?: string; 
  public get balanceInboundConnections() {
    return this.getStringAttribute('balance_inbound_connections');
  }
  public set balanceInboundConnections(value: string) {
    this._balanceInboundConnections = value;
  }
  public resetBalanceInboundConnections() {
    this._balanceInboundConnections = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get balanceInboundConnectionsInput() {
    return this._balanceInboundConnections;
  }

  // external_sni - computed: false, optional: true, required: false
  private _externalSni?: string; 
  public get externalSni() {
    return this.getStringAttribute('external_sni');
  }
  public set externalSni(value: string) {
    this._externalSni = value;
  }
  public resetExternalSni() {
    this._externalSni = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalSniInput() {
    return this._externalSni;
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

  // local_connect_timeout_ms - computed: false, optional: true, required: false
  private _localConnectTimeoutMs?: number; 
  public get localConnectTimeoutMs() {
    return this.getNumberAttribute('local_connect_timeout_ms');
  }
  public set localConnectTimeoutMs(value: number) {
    this._localConnectTimeoutMs = value;
  }
  public resetLocalConnectTimeoutMs() {
    this._localConnectTimeoutMs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localConnectTimeoutMsInput() {
    return this._localConnectTimeoutMs;
  }

  // local_request_timeout_ms - computed: false, optional: true, required: false
  private _localRequestTimeoutMs?: number; 
  public get localRequestTimeoutMs() {
    return this.getNumberAttribute('local_request_timeout_ms');
  }
  public set localRequestTimeoutMs(value: number) {
    this._localRequestTimeoutMs = value;
  }
  public resetLocalRequestTimeoutMs() {
    this._localRequestTimeoutMs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localRequestTimeoutMsInput() {
    return this._localRequestTimeoutMs;
  }

  // max_inbound_connections - computed: false, optional: true, required: false
  private _maxInboundConnections?: number; 
  public get maxInboundConnections() {
    return this.getNumberAttribute('max_inbound_connections');
  }
  public set maxInboundConnections(value: number) {
    this._maxInboundConnections = value;
  }
  public resetMaxInboundConnections() {
    this._maxInboundConnections = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxInboundConnectionsInput() {
    return this._maxInboundConnections;
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

  // mode - computed: false, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // mutual_tls_mode - computed: false, optional: true, required: false
  private _mutualTlsMode?: string; 
  public get mutualTlsMode() {
    return this.getStringAttribute('mutual_tls_mode');
  }
  public set mutualTlsMode(value: string) {
    this._mutualTlsMode = value;
  }
  public resetMutualTlsMode() {
    this._mutualTlsMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mutualTlsModeInput() {
    return this._mutualTlsMode;
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

  // protocol - computed: false, optional: false, required: true
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // destination - computed: false, optional: true, required: false
  private _destination = new ConfigEntryServiceDefaultsDestinationList(this, "destination", true);
  public get destination() {
    return this._destination;
  }
  public putDestination(value: ConfigEntryServiceDefaultsDestination[] | cdktf.IResolvable) {
    this._destination.internalValue = value;
  }
  public resetDestination() {
    this._destination.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination.internalValue;
  }

  // envoy_extensions - computed: false, optional: true, required: false
  private _envoyExtensions = new ConfigEntryServiceDefaultsEnvoyExtensionsList(this, "envoy_extensions", false);
  public get envoyExtensions() {
    return this._envoyExtensions;
  }
  public putEnvoyExtensions(value: ConfigEntryServiceDefaultsEnvoyExtensions[] | cdktf.IResolvable) {
    this._envoyExtensions.internalValue = value;
  }
  public resetEnvoyExtensions() {
    this._envoyExtensions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envoyExtensionsInput() {
    return this._envoyExtensions.internalValue;
  }

  // expose - computed: false, optional: false, required: true
  private _expose = new ConfigEntryServiceDefaultsExposeList(this, "expose", true);
  public get expose() {
    return this._expose;
  }
  public putExpose(value: ConfigEntryServiceDefaultsExpose[] | cdktf.IResolvable) {
    this._expose.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get exposeInput() {
    return this._expose.internalValue;
  }

  // mesh_gateway - computed: false, optional: true, required: false
  private _meshGateway = new ConfigEntryServiceDefaultsMeshGatewayList(this, "mesh_gateway", true);
  public get meshGateway() {
    return this._meshGateway;
  }
  public putMeshGateway(value: ConfigEntryServiceDefaultsMeshGateway[] | cdktf.IResolvable) {
    this._meshGateway.internalValue = value;
  }
  public resetMeshGateway() {
    this._meshGateway.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get meshGatewayInput() {
    return this._meshGateway.internalValue;
  }

  // transparent_proxy - computed: false, optional: true, required: false
  private _transparentProxy = new ConfigEntryServiceDefaultsTransparentProxyList(this, "transparent_proxy", true);
  public get transparentProxy() {
    return this._transparentProxy;
  }
  public putTransparentProxy(value: ConfigEntryServiceDefaultsTransparentProxy[] | cdktf.IResolvable) {
    this._transparentProxy.internalValue = value;
  }
  public resetTransparentProxy() {
    this._transparentProxy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transparentProxyInput() {
    return this._transparentProxy.internalValue;
  }

  // upstream_config - computed: false, optional: true, required: false
  private _upstreamConfig = new ConfigEntryServiceDefaultsUpstreamConfigList(this, "upstream_config", true);
  public get upstreamConfig() {
    return this._upstreamConfig;
  }
  public putUpstreamConfig(value: ConfigEntryServiceDefaultsUpstreamConfig[] | cdktf.IResolvable) {
    this._upstreamConfig.internalValue = value;
  }
  public resetUpstreamConfig() {
    this._upstreamConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upstreamConfigInput() {
    return this._upstreamConfig.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      balance_inbound_connections: cdktf.stringToTerraform(this._balanceInboundConnections),
      external_sni: cdktf.stringToTerraform(this._externalSni),
      id: cdktf.stringToTerraform(this._id),
      local_connect_timeout_ms: cdktf.numberToTerraform(this._localConnectTimeoutMs),
      local_request_timeout_ms: cdktf.numberToTerraform(this._localRequestTimeoutMs),
      max_inbound_connections: cdktf.numberToTerraform(this._maxInboundConnections),
      meta: cdktf.hashMapper(cdktf.stringToTerraform)(this._meta),
      mode: cdktf.stringToTerraform(this._mode),
      mutual_tls_mode: cdktf.stringToTerraform(this._mutualTlsMode),
      name: cdktf.stringToTerraform(this._name),
      namespace: cdktf.stringToTerraform(this._namespace),
      partition: cdktf.stringToTerraform(this._partition),
      protocol: cdktf.stringToTerraform(this._protocol),
      destination: cdktf.listMapper(configEntryServiceDefaultsDestinationToTerraform, true)(this._destination.internalValue),
      envoy_extensions: cdktf.listMapper(configEntryServiceDefaultsEnvoyExtensionsToTerraform, true)(this._envoyExtensions.internalValue),
      expose: cdktf.listMapper(configEntryServiceDefaultsExposeToTerraform, true)(this._expose.internalValue),
      mesh_gateway: cdktf.listMapper(configEntryServiceDefaultsMeshGatewayToTerraform, true)(this._meshGateway.internalValue),
      transparent_proxy: cdktf.listMapper(configEntryServiceDefaultsTransparentProxyToTerraform, true)(this._transparentProxy.internalValue),
      upstream_config: cdktf.listMapper(configEntryServiceDefaultsUpstreamConfigToTerraform, true)(this._upstreamConfig.internalValue),
    };
  }
}
